import { StyleSheet } from 'react-native';
import colors from '../../components/Theme/theme'; 

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  menu: {
    marginBottom: 32,
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: colors.secondary,
  },
  menuItemText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: colors.textPrimary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 16,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  settingsText: {
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
    color: colors.textPrimary,
  },
  notificationBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  notificationCount: {
    color: colors.background,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: colors.background,
    fontSize: 16,
  },
  touchableLogOut: {
    padding: 8,
  },
});
