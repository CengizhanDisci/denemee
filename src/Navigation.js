import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from './screens/CategoriesScreen';
import WishlistScreen from './screens/WishlistScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductList from './screens/ProductList';
import ProductDetails from './screens/ProductDetails';
import CategoryProducts from './screens/CategoryProducts';
import CartScreen from './screens/CartScreen';
import AddressScreen from './screens/AdressScreen';
import PaymentScreen from './screens/PaymentScreen';
import CouponsScreen from './screens/CouponsScreen';
import OrderTrackingScreen from './screens/OrderTrackingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const HomeStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="ProductList" component={ProductList} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
    <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
  </Stack.Navigator>
);

const CategoriesStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
    <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
  </Stack.Navigator>
);

const WishlistStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="Coupons" component={CouponsScreen} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="CartScreen" component={CartScreen} />
    <Stack.Screen name="Address" component={AddressScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} />
  </Stack.Navigator>
);

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={CategoriesStack} />
      <Tab.Screen name="Wishlist" component={WishlistStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

export default MyTabs;
