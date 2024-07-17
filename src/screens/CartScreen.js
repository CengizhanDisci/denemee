import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useCart } from '../context/CartContext';
import styles from './CartScreen.styles';

const coupons = [
  { code: 'DISCOUNT10', discount: 10 },
  { code: 'SUMMER20', discount: 20 },
  { code: 'FREESHIP', discount: 0 }
];

const CartItem = ({ item, onUpdateQuantity }) => {
  const imageUrl = item.thumbnail || 'https://via.placeholder.com/100';

  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: imageUrl }} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>{`$${(item.price || 0).toFixed(2)}`}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={() => onUpdateQuantity(item.id, -1)}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityInput}>{item.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => onUpdateQuantity(item.id, 1)}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CartScreen = ({ navigation }) => {
  const { cart, updateCartQuantity } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    const validCoupon = coupons.find(c => c.code === coupon.toUpperCase());
    if (validCoupon) {
      setDiscount(validCoupon.discount);
    } else {
      alert('Invalid coupon code');
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * ((100 - discount) / 100);

  const handleCheckout = () => {
    navigation.navigate('Address');
  };

  const handleUpdateQuantity = (productId, amount) => {
    const item = cart.find((product) => product.id === productId);
    if (!item) return;

    const newQuantity = item.quantity + amount;
    updateCartQuantity(productId, newQuantity);
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <TouchableOpacity style={styles.continueShoppingButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.continueShoppingText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={({ item }) => <CartItem item={item} onUpdateQuantity={handleUpdateQuantity} />}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={styles.couponContainer}>
            <TextInput
              placeholder="Enter Your Offer Code"
              style={styles.couponInput}
              value={coupon}
              onChangeText={setCoupon}
            />
            <TouchableOpacity style={styles.applyButton} onPress={handleApplyCoupon}>
              <Text>Apply</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.totalPriceLabel}>Total Price:</Text>
            <Text style={styles.totalPrice}>{`$${discountedPrice.toFixed(2)}`}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CartScreen;
