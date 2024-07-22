import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useCart } from '../../context/CartContext';
import CustomTextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import styles from './CartScreen.styles';

const coupons = [
  { code: 'DISCOUNT10', discount: 10 },
  { code: 'SUMMER20', discount: 20 },
  { code: 'FREESHIP', discount: 0 }
];

const CartItem = React.memo(({ item, onUpdateQuantity }) => {
  const imageUrl = item.thumbnail || 'https://via.placeholder.com/100';

  const handleDecrement = useCallback(() => {
    onUpdateQuantity(item.id, -1);
  }, [item.id, onUpdateQuantity]);

  const handleIncrement = useCallback(() => {
    onUpdateQuantity(item.id, 1);
  }, [item.id, onUpdateQuantity]);

  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: imageUrl }} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>${(item.price || 0).toFixed(2)}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Button
            title="-"
            onPress={handleDecrement}
          />
          <Text style={styles.quantityInput}>{item.quantity}</Text>
          <Button
            title="+"
            onPress={handleIncrement}
          />
        </View>
      </View>
    </View>
  );
});

const CartScreen = ({ navigation }) => {
  const { cart, updateCartQuantity } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = useCallback(() => {
    const validCoupon = coupons.find(c => c.code === coupon.toUpperCase());
    if (validCoupon) {
      setDiscount(validCoupon.discount);
    } else {
      alert('Invalid coupon code');
    }
  }, [coupon]);

  const handleCheckout = useCallback(() => {
    navigation.navigate('Address');
  }, [navigation]);

  const handleUpdateQuantity = useCallback((productId, amount) => {
    const item = cart.find((product) => product.id === productId);
    if (!item) return;

    const newQuantity = item.quantity + amount;
    updateCartQuantity(productId, newQuantity);
  }, [cart, updateCartQuantity]);

  const handleNavigateHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * ((100 - discount) / 100);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Button title="Shop Now" onPress={handleNavigateHome} />
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={({ item }) => <CartItem item={item} onUpdateQuantity={handleUpdateQuantity} />}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={styles.couponContainer}>
            <CustomTextInput
              placeholder="Enter Your Offer Code"
              value={coupon}
              onChangeText={setCoupon}
              style={styles.couponInput}
            />
            <Button title="Apply" onPress={handleApplyCoupon} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.totalPriceLabel}>Total Price:</Text>
            <Text style={styles.totalPrice}>${discountedPrice.toFixed(2)}</Text>
          </View>
          <Button title="Checkout" onPress={handleCheckout} />
        </>
      )}
    </View>
  );
};

export default CartScreen;
