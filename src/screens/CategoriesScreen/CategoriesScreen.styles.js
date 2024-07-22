import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  items: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  shopNowButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  shopNowText: {
    color: '#00f',
    fontSize: 16,
  },
});
