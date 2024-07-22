import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  product: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'transparent',
  },
  textContainer: {
    padding: 8,
  },
  category: {
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
