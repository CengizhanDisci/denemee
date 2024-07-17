import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './ProductCard.styles';

const ProductCard = ({ product, onPress, onFavoritePress, isFavorite }) => {
  return (
    <TouchableOpacity style={styles.product} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
        <TouchableOpacity style={styles.favoriteButton} onPress={onFavoritePress}>
          <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={isFavorite ? 'red' : 'gray'} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>
          {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
