import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchCategories } from '../../services/api';
import Button from '../../components/Button/Button';
import styles from './CategoriesScreen.styles';

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error setting categories:', error);
    }
  }, []);

  const handleNavigate = useCallback((categoryName) => {
    navigation.navigate('CategoryProducts', { category: categoryName });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {categories.map((category) => (
        <View key={category.name} style={styles.categoryContainer}>
          <Image
            source={{ uri: category.image }}
            style={styles.image}
            resizeMode="cover"
            defaultSource={require('../../assets/beauty.png')}
          />
          <View style={styles.overlay} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{category.name}</Text>
            <Text style={styles.items}>{category.items} items</Text>
            <Button
              title="Shop Now"
              onPress={() => handleNavigate(category.name)}
              style={styles.shopNowButton}
              textStyle={styles.shopNowText}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoriesScreen;
