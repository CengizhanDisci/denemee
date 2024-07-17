import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useCart } from '../context/CartContext'; 
import styles from './ProductDetails.styles';

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useCart(); 

  const colors = product.colors || ['#000', '#555', '#888', '#bbb'];
  const images = product.images || [product.thumbnail];

  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const renderImageItem = ({ item }) => (
    <TouchableOpacity style={styles.thumbnailContainer}>
      <Image source={{ uri: item }} style={styles.thumbnail} />
    </TouchableOpacity>
  );

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.mainImage} />
        <FlatList
          data={images}
          renderItem={renderImageItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          style={styles.thumbnailList}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.priceRatingContainer}>
          <Text style={styles.price}>${product.price}</Text>
          {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
          <Text style={styles.rating}>{product.rating} ★</Text>
          <Text style={styles.reviewCount}>({product.reviewCount} reviews)</Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.label}>Size:</Text>
          {['S', 'M', 'L', 'XL'].map(size => (
            <TouchableOpacity
              key={size}
              style={[styles.sizeButton, selectedSize === size && styles.selectedSizeButton]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={[styles.sizeText, selectedSize === size && styles.selectedSizeText]}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.colorContainer}>
          <Text style={styles.label}>Color:</Text>
          {colors.map(color => (
            <TouchableOpacity
              key={color}
              style={[styles.colorButton, selectedColor === color && styles.selectedColorButton]}
              onPress={() => setSelectedColor(color)}
            >
              <View style={[styles.colorCircle, { backgroundColor: color }]} />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
