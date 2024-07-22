import { StyleSheet } from 'react-native';
import colors from '../../components/Theme/theme'; 

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: colors.secondary,
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
    color: colors.textPrimary,
  },
  productDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  discountedPrice: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    padding: 5,
    backgroundColor: colors.border,
    minWidth: 30,
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
  },
  quantityInput: {
    marginHorizontal: 10,
    fontSize: 16,
    color: colors.textPrimary,
  },
  couponContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    marginRight: 10,
    color: colors.textPrimary,
  },

  totalPriceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },

  checkoutButtonText: {
    color: colors.background,
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
    color: colors.textSecondary,
    marginBottom: 20,
  },
  continueShoppingButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueShoppingText: {
    color: colors.background,
    fontSize: 18,
  },
});
