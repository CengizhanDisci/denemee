import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { getProducts } from '../../services/api';
import { useFavorites } from '../../context/FavoriteContext';
import styles from './CategoryProducts.styles';

const CategoryProducts = ({ navigation }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const route = useRoute();
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      const data = await getProducts();
      const filteredProducts = data.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  }, [category]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const isFavorite = useCallback((product) => {
    return favorites.some((fav) => fav.id === product.id);
  }, [favorites]);

  const handleFavoritePress = useCallback((product) => {
    if (isFavorite(product)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  }, [isFavorite, removeFromFavorites, addToFavorites]);

  const handleNavigate = useCallback((product) => {
    navigation.navigate('ProductDetails', { product });
  }, [navigation]);

  const renderProduct = useCallback(({ item }) => (
    <TouchableOpacity style={styles.product} onPress={() => handleNavigate(item)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <TouchableOpacity onPress={() => handleFavoritePress(item)} style={styles.favoriteButton}>
          <Ionicons
            name={isFavorite(item) ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite(item) ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          {item.oldPrice && <Text style={styles.oldPrice}>${item.oldPrice}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  ), [handleNavigate, handleFavoritePress, isFavorite]);

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
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderProduct}
      contentContainerStyle={styles.container}
      numColumns={2}
    />
  );
};

export default CategoryProducts;
