import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { getProducts } from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '../../context/FavoriteContext';
import bannerImage from '../../assets/banner.png';
import Button from '../../components/Button/Button';
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
    <TouchableOpacity style={styles.product} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <TouchableOpacity style={styles.favoriteButton} onPress={() => handleFavoritePress(item)}>
          <Text style={styles.favoriteIcon}>{isFavorite(item) ? '❤️' : '🤍'}</Text>
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
          <Button
            key={category}
            title={category}
            onPress={() => navigation.navigate('CategoryProducts', { category })}
            style={styles.categoryButton}
            textStyle={styles.categoryText}
          />
        ))}
      </View>
      <Text style={styles.sectionTitle}>Most Popular</Text>
      <FlatList
        data={filteredProducts.slice(0, 5)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Trending Now</Text>
      <FlatList
        data={filteredProducts.slice(5, 10)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default ProductList;
