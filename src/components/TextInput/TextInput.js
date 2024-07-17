import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import styles from './TextInput.styles';

const TextInput = ({ placeholder, value, onChangeText, secureTextEntry, style }) => (
  <RNTextInput
    style={[styles.input, style]}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
  />
);

export default TextInput;
