import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 26,
  },
  couponContainer: {
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: 'green',
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
  },
  backgroundImageStyle: {
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  code: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
  },
});
