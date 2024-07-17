import React from 'react';
import { View, FlatList, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './CouponsScreen.styles';

const coupons = [
  {
    code: 'DISCOUNT10',
    description: 'Get 10% off on your order',
  },
  {
    code: 'SUMMER20',
    description: 'Get 20% off on summer collection',
  },
  {
    code: 'FREESHIP',
    description: 'Free shipping on your next order',
  },
];

const CouponsScreen = () => {
  const renderCoupon = ({ item }) => (
    <TouchableOpacity style={styles.couponContainer}>
      <ImageBackground source={item.background} style={styles.backgroundImage} imageStyle={styles.backgroundImageStyle}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.code}>{item.code}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={coupons}
        renderItem={renderCoupon}
        keyExtractor={(item) => item.code}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default CouponsScreen;
