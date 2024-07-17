import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      itemContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
      },
      productImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
      },
      itemDetails: {
        flex: 1,
        marginLeft: 10,
      },
      productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      productDescription: {
        fontSize: 14,
        color: '#666',
      },
      priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      discountedPrice: {
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: 'bold',
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      quantityButton: {
        padding: 5,
        backgroundColor: '#ddd',
        minWidth: 30,
        alignItems: 'center',
      },
      quantityText: {
        fontSize: 18,
      },
      quantityInput: {
        marginHorizontal: 10,
        fontSize: 16,
      },
      couponContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
      },
      couponInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
      },
      applyButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
      },
      totalPriceLabel: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50',
      },
      checkoutButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
      },
      checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      emptyText: {
        fontSize: 20,
        color: '#666',
        marginBottom: 20,
      },
      continueShoppingButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
      },
      continueShoppingText: {
        color: '#fff',
        fontSize: 18,
      },
    });
 