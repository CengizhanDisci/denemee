import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFavorites } from '../../context/FavoriteContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import { keyExtractor } from '../../context/utils';
import styles from './WishlistScreen.styles';

const WishlistScreen = ({ navigation }) => {
  const { favorites, removeFromFavorites } = useFavorites();

  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
      onFavoritePress={() => removeFromFavorites(item.id)}
      isFavorite={true}
    />
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your wishlist is empty</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          renderItem={renderProduct}
          contentContainerStyle={styles.listContainer}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default WishlistScreen;
