import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useCart } from '../context/CartContext';
import { placeOrder } from '../services/orderAPI';
import styles from './PaymentScreen.styles';

const PaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = async () => {
    if (!cardNumber || !expiryDate || !cvv) {
      alert('All payment fields are required.');
      return;
    }

    try {
      const orderResponse = await placeOrder(cart);
      clearCart();
      navigation.navigate('OrderTracking', {
        order: {
          id: orderResponse.id,
          productImage: cart[0].thumbnail,
          productTitle: cart[0].title,
          productPrice: totalPrice.toFixed(2),
          location: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
          status: [
            { id: 1, title: 'Order Created', date: 'Monday June 20th, 2020 12:25 AM' },
            { id: 2, title: 'North Gateway', date: 'Monday June 23th, 2020 13:34 AM', description: 'Your order has been arrived at North Gateway, please wait next info' },
            { id: 3, title: 'On Delivery', date: 'Monday June 26th, 2020 15:25 AM', person: 'Thomas Djono', personId: '02123141' },
          ],
        },
      });
    } catch (error) {
      console.error('Error in handlePayment:', error);
      alert('Failed to place the order.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{`$${item.price.toFixed(2)}`}</Text>
        <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => <Text style={styles.heading}>Payment Details</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Price:</Text>
        <Text style={styles.totalPrice}>{`$${totalPrice.toFixed(2)}`}</Text>
      </View>
      <TextInput
        placeholder="Card Number"
        style={styles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Expiry Date (MM/YY)"
        style={styles.input}
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <TextInput
        placeholder="CVV"
        style={styles.input}
        value={cvv}
        onChangeText={setCvv}
        secureTextEntry
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
