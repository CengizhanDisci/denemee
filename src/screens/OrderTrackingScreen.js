import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './OrderTrackingScreen.styles';

const OrderTrackingScreen = ({ route }) => {
  const { order } = route.params;

  const renderStatusItem = ({ item }) => (
    <View style={styles.statusItem}>
      <View style={styles.statusIndicator} />
      <View>
        <Text style={styles.statusTitle}>{item.title}</Text>
        <Text style={styles.statusDate}>{item.date}</Text>
        {item.description && <Text style={styles.statusDescription}>{item.description}</Text>}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.orderId}>Order #{order.id}</Text>
      <View style={styles.productContainer}>
        <Image source={{ uri: order.productImage }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{order.productTitle}</Text>
          <Text style={styles.productPrice}>{`$${order.productPrice}`}</Text>
        </View>
      </View>
      <FlatList
        data={order.status}
        renderItem={renderStatusItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.statusList}
      />
    </View>
  );
};

export default OrderTrackingScreen;
