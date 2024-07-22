import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import CustomTextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import styles from './AdressScreen.styles';

const AddressScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSaveAddress = useCallback(() => {
    if (!fullName || !address) {
      alert('Full Name and Address are required.');
      return;
    }
    navigation.navigate('Payment');
  }, [fullName, address, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Details</Text>
      <CustomTextInput
        placeholder="Type Your Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <CustomTextInput
        placeholder="Type Your mobile no."
        value={mobileNo}
        onChangeText={setMobileNo}
      />
      <Text style={styles.heading}>Address</Text>
      <CustomTextInput
        placeholder="Pin Code"
        value={pinCode}
        onChangeText={setPinCode}
      />
      <CustomTextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <CustomTextInput
        placeholder="Locality/Town"
        value={locality}
        onChangeText={setLocality}
      />
      <View style={styles.row}>
        <CustomTextInput
          placeholder="City/District"
          value={city}
          onChangeText={setCity}
          style={styles.halfInput}
        />
        <CustomTextInput
          placeholder="State"
          value={state}
          onChangeText={setState}
          style={styles.halfInput}
        />
      </View>
      <Button title="Next" onPress={handleSaveAddress} />
    </View>
  );
};

export default AddressScreen;
