import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles';

const Button = ({ onPress, title, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
