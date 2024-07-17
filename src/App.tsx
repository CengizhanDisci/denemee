import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import { FavoriteProvider } from './context/FavoriteContext';
import { CartProvider } from './context/CartContext';
import LoginScreen from './screens/LoginScreen';
import MyTabs from './Navigation';


const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="MainApp" component={MyTabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
}