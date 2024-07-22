import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  productDetails: {
    justifyContent: 'center',
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#4CAF50',
  },
  statusList: {
    marginTop: 20,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    marginRight: 10,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusDate: {
    fontSize: 14,
    color: '#666',
  },
  statusDescription: {
    fontSize: 14,
    color: '#666',
  },
});
