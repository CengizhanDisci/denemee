import React, { useCallback } from 'react';
import { View, Text, FlatList, ImageBackground, Alert } from 'react-native';
import styles from './CouponsScreen.styles';
import Button from '../../components/Button/Button';

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
  const applyCoupon = useCallback((code) => {
    Alert.alert(`Coupon ${code} applied!`);
  }, []);

  const renderCoupon = useCallback(({ item }) => (
    <View style={styles.couponContainer}>
      <ImageBackground source={item.background} style={styles.backgroundImage} imageStyle={styles.backgroundImageStyle}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.code}>{item.code}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Button
            title="Apply Coupon"
            onPress={() => applyCoupon(item.code)}
            style={styles.applyButton}
            textStyle={styles.applyButtonText}
          />
        </View>
      </ImageBackground>
    </View>
  ), [applyCoupon]);

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
