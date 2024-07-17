  import { StyleSheet } from 'react-native';

  export default StyleSheet.create({
    container: {
      backgroundColor: '#fff',
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
      color: '#333',
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
      borderColor: '#ddd',
      borderRadius: 8,
      marginHorizontal: 5,
      backgroundColor: '#f9f9f9',
    },
    menuItemText: {
      marginTop: 8,
      fontSize: 14,
      textAlign: 'center',
      color: '#333',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 16,
    },
    settingsItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    settingsText: {
      fontSize: 16,
      marginLeft: 16,
      flex: 1,
      color: '#333',
    },
    notificationBadge: {
      backgroundColor: 'green',
      borderRadius: 12,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    notificationCount: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
