import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { getProducts } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '../context/FavoriteContext';
import ProductCard from '../components/ProductCard/ProductCard';
import { keyExtractor } from '../context/utils';
import bannerImage from '../assets/banner.png';
import styles from './ProductList.styles';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data.products);
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

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={bannerImage} style={styles.bannerImage} resizeMode="contain" />
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Products..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <View style={styles.categories}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={styles.categoryButton}
            onPress={() => navigation.navigate('CategoryProducts', { category })}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Most Popular</Text>
      <FlatList
        data={filteredProducts.slice(0, 5)}
        keyExtractor={keyExtractor}
        renderItem={renderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Trending Now</Text>
      <FlatList
        data={filteredProducts.slice(5, 10)}
        keyExtractor={keyExtractor}
        renderItem={renderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default ProductList;
