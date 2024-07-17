import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getProductsByCategory } from '../services/api';
import { useFavorites } from '../context/FavoriteContext';
import ProductCard from '../components/ProductCard/ProductCard';
import { keyExtractor } from '../context/utils';
import styles from './CategoryProducts.styles';

const CategoryProducts = ({ navigation }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const route = useRoute();
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProductsByCategory(category);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const isFavorite = (product) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  const handleFavoritePress = (product) => {
    if (isFavorite(product)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
      onFavoritePress={() => handleFavoritePress(item)}
      isFavorite={isFavorite(item)}
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={keyExtractor}
      renderItem={renderProduct}
      contentContainerStyle={styles.container}
      numColumns={2}
    />
  );
};

export default CategoryProducts;
