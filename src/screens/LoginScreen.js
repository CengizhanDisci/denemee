import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import styles from './LoginScreen.styles';

const LoginScreen = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigation.replace('MainApp');
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.subtitle}>E-TİCARET PLATFORMU</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Type Username Here"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Type Password Here"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Reset here</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>Don’t have an account?</Text>
      <Button title="Register now" style={styles.registerButton} />
    </ScrollView>
  );
};

export default LoginScreen;
