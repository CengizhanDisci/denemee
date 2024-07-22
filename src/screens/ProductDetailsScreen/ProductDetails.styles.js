import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  mainImage: {
    width: '100%',
    height: 300,
    marginBottom: 8,
  },
  thumbnailList: {
    flexDirection: 'row',
  },
  thumbnailContainer: {
    marginRight: 8,
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  textContainer: {
    padding: 8,
  },
  category: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 20,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  rating: {
    fontSize: 20,
    color: '#f39c12',
    marginRight: 4,
  },
  reviewCount: {
    fontSize: 16,
    color: '#888',
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  sizeButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 8,
  },
  selectedSizeButton: {
    backgroundColor: '#28a745',
  },
  sizeText: {
    fontSize: 16,
    color: '#000',
  },
  selectedSizeText: {
    color: '#fff',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  colorButton: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 8,
  },
  selectedColorButton: {
    borderColor: '#28a745',
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
