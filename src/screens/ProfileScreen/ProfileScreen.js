import React, { useCallback } from 'react';
import { View, Text, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/Button';
import styles from './ProfileScreen.styles';
import colors from '../../components/Theme/theme';

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = useCallback(() => {
    Alert.alert(
      "Çıkış Yap",
      "Çıkış yapmak istediğinizden emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        {
          text: "Çıkış Yap",
          onPress: () => {
            logout();
            navigation.replace('Login');
          }
        }
      ],
      { cancelable: true }
    );
  }, [logout, navigation]);

  const handleMenuItemPress = useCallback((screen) => {
    if (screen) {
      navigation.navigate(screen);
    }
  }, [navigation]);

  const menuItems = [
    { icon: 'file-tray-full-outline', text: 'Siparişler', screen: null },
    { icon: 'heart-outline', text: 'Favoriler', screen: 'Wishlist' },
    { icon: 'gift-outline', text: 'Kuponlar', screen: 'Coupons' },
    { icon: 'help-circle-outline', text: 'Yardım Merkezi', screen: null }
  ];

  const accountSettingsItems = [
    { icon: 'person-outline', text: 'Profili Düzenle' },
    { icon: 'location-outline', text: 'Kayıtlı Adresler' },
    { icon: 'language-outline', text: 'Dil Seç' },
    { icon: 'notifications-outline', text: 'Bildirim Ayarları', badge: '5' },
    { icon: 'log-out-outline', text: 'Çıkış Yap', onPress: handleLogout }
  ];

  const renderMenuItem = useCallback(({ item }) => (
    <TouchableOpacity 
      style={styles.menuItem} 
      onPress={() => handleMenuItemPress(item.screen)}
    >
      <Ionicons name={item.icon} size={24} color={colors.textPrimary} />
      <Text style={styles.menuItemText}>{item.text}</Text>
    </TouchableOpacity>
  ), [handleMenuItemPress]);

  const renderSettingsItem = useCallback(({ item }) => (
    <View style={styles.settingsItem}>
      <Ionicons name={item.icon} size={24} color={colors.textSecondary} />
      <Text style={styles.settingsText}>{item.text}</Text>
      {item.badge && (
        <View style={[styles.notificationBadge, { backgroundColor: colors.notification }]}>
          <Text style={styles.notificationCount}>{item.badge}</Text>
        </View>
      )}
      {item.text === 'Çıkış Yap' ? (
        <Button
          title="Çıkış Yap"
          onPress={item.onPress}
          style={[styles.logoutButton, { backgroundColor: colors.error }]}
          textStyle={styles.logoutButtonText}
        />
      ) : (
        <TouchableOpacity onPress={item.onPress} style={styles.touchableLogOut}>
          <Ionicons name="chevron-forward-outline" size={24} color={colors.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  ), []);

  const ListHeader = useCallback(() => (
    <View>
      <View style={styles.header}>
        <Avatar
          rounded
          size="large"
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          containerStyle={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user ? `${user.firstName} ${user.lastName}` : 'Misafir Kullanıcı'}</Text>
        </View>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.text}
        horizontal
        contentContainerStyle={styles.menu}
      />
      <Text style={styles.sectionTitle}>Hesap Ayarları</Text>
    </View>
  ), [renderMenuItem, user]);

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
