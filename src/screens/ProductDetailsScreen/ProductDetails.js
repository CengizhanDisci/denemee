import React, { useState, useCallback } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import CustomTextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import { useCart } from '../../context/CartContext';
import styles from './ProductDetails.styles';

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useCart();
  
  const colors = product.colors || ['#000', '#555', '#888', '#bbb'];
  const images = product.images || [product.thumbnail];

  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const renderImageItem = useCallback(({ item }) => (
    <Button style={styles.thumbnailContainer}>
      <Image source={{ uri: item }} style={styles.thumbnail} />
    </Button>
  ), []);

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [addToCart, product]);

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
            <Button
              key={size}
              title={size}
              onPress={() => setSelectedSize(size)}
              style={[styles.sizeButton, selectedSize === size && styles.selectedSizeButton]}
              textStyle={[styles.sizeText, selectedSize === size && styles.selectedSizeText]}
            />
          ))}
        </View>
        <View style={styles.colorContainer}>
          <Text style={styles.label}>Color:</Text>
          {colors.map(color => (
            <Button
              key={color}
              title=""
              onPress={() => setSelectedColor(color)}
              style={[styles.colorButton, selectedColor === color && styles.selectedColorButton]}
            >
              <View style={[styles.colorCircle, { backgroundColor: color }]} />
            </Button>
          ))}
        </View>
        <Button 
          title="Add to Cart"
          onPress={handleAddToCart}
          style={styles.addButton}
          textStyle={styles.addButtonText}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
