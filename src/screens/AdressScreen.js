import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './AdressScreen.styles';

const AddressScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSaveAddress = () => {
    if (!fullName || !address) {
      alert('Full Name and Address are required.');
      return;
    }

    navigation.navigate('Payment');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Details</Text>
      <TextInput
        placeholder="Type Your Name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Type Your mobile no."
        style={styles.input}
        value={mobileNo}
        onChangeText={setMobileNo}
      />
      <Text style={styles.heading}>Address</Text>
      <TextInput
        placeholder="Pin Code"
        style={styles.input}
        value={pinCode}
        onChangeText={setPinCode}
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Locality/Town"
        style={styles.input}
        value={locality}
        onChangeText={setLocality}
      />
      <View style={styles.row}>
        <TextInput
          placeholder="City/District"
          style={[styles.input, styles.halfInput]}
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          placeholder="State"
          style={[styles.input, styles.halfInput]}
          value={state}
          onChangeText={setState}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
        <Text style={styles.saveButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressScreen;
