import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchCategories } from '../services/api'; 
import styles from './CategoriesScreen.styles';

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchCategories(); 
      setCategories(data);
    } catch (error) {
      console.error('Error setting categories:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.name}
          style={styles.categoryContainer}
          onPress={() => navigation.navigate('CategoryProducts', { category: category.name })}
        >
          <Image
            source={{ uri: category.image }}
            style={styles.image}
            resizeMode="cover"
            defaultSource={require('../assets/beauty.png')} 
          />
          <View style={styles.overlay} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{category.name}</Text>
            <Text style={styles.items}>{category.items} items</Text>
            <TouchableOpacity
              style={styles.shopNowButton}
              onPress={() => navigation.navigate('CategoryProducts', { category: category.name })}
            >
              <Text style={styles.shopNowText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoriesScreen;
