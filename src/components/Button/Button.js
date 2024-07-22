import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './Button.styles';

const Button = ({ title, onPress, style, textStyle, children }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    {title ? <Text style={[styles.buttonText, textStyle]}>{title}</Text> : children}
  </TouchableOpacity>
);

export default Button;
