  import React from 'react';
  import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native';
  import { useAuth } from '../context/AuthContext';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { Avatar } from 'react-native-elements';
  import { useNavigation } from '@react-navigation/native';
  import styles from './ProfileScreen.styles';

  const ProfileScreen = () => {
    const { user, logout } = useAuth();
    const navigation = useNavigation();

    const handleLogout = () => {
      Alert.alert(
        "Log Out",
        "Are you sure you want to log out?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Log Out",
            onPress: () => {
              logout();
              navigation.replace('Login');
            }
          }
        ],
        { cancelable: true }
      );
    };

    const menuItems = [
      { icon: 'file-tray-full-outline', text: 'Order' , screen: null },
      { icon: 'heart-outline', text: 'Wishlist', screen: 'Wishlist' },
      { icon: 'gift-outline', text: 'Coupons', screen: 'Coupons' },
      { icon: 'help-circle-outline', text: 'Help Center', screen: null }
    ];

    const accountSettingsItems = [
      { icon: 'person-outline', text: 'Edit Profile' },
      { icon: 'location-outline', text: 'Saved Addresses' },
      { icon: 'language-outline', text: 'Select Language' },
      { icon: 'notifications-outline', text: 'Notification Setting', badge: '5' },
      { icon: 'log-out-outline', text: 'Log Out', onPress: handleLogout }
    ];

    const renderMenuItem = ({ item }) => (
      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => item.screen && navigation.navigate(item.screen)}
      >
        <Ionicons name={item.icon} size={24} color="black" />
        <Text style={styles.menuItemText}>{item.text}</Text>
      </TouchableOpacity>
    );

    const renderSettingsItem = ({ item }) => (
      <TouchableOpacity style={styles.settingsItem} onPress={item.onPress}>
        <Ionicons name={item.icon} size={24} color="gray" />
        <Text style={styles.settingsText}>{item.text}</Text>
        {item.badge && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationCount}>{item.badge}</Text>
          </View>
        )}
      </TouchableOpacity>
    );

    const ListHeader = () => (
      <View>
        <View style={styles.header}>
          <Avatar
            rounded
            size="large"
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
            containerStyle={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{user ? `${user.firstName} ${user.lastName}` : 'Guest User'}</Text>
          </View>
        </View>
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.text}
          horizontal
          contentContainerStyle={styles.menu}
        />
        <Text style={styles.sectionTitle}>Account Settings</Text>
      </View>
    );

    return (
      <FlatList
        data={accountSettingsItems}
        renderItem={renderSettingsItem}
        keyExtractor={(item) => item.text}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.container}
      />
    );
  };

  export default ProfileScreen;
