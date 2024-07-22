import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  couponContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
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
  applyButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  applyButtonText: {
    color: '#00f',
    fontSize: 16,
  },
});
