import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  categoryButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  product: {
    width: 180,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
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
  },
  favoriteIcon: {
    fontSize: 18,
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
    color: '#333',
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
});
