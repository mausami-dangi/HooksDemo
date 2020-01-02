import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function App() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  function handleLoginInput() {
    if (firstname === '') {
      Alert.alert('Please Enter FirstName');
    } else if (lastname === '') {
      Alert.alert('Please Enter LastName');
    } else {
      Alert.alert('You are successfully login');
    }
  }
  return (
    <View style={styles.MainContainer}>
      <TextInput
        style={styles.textInputContainer}
        onChangeText={value => {
          setFirstName(value);
        }}
      />
      <TextInput
        style={[styles.textInputContainer, {marginTop: 5}]}
        onChangeText={value => {
          setLastname(value);
        }}
      />
      <TouchableOpacity
        style={[styles.buttonContainer, {marginTop: 10}]}
        onPress={() => handleLoginInput()}>
        <Text>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    height: 60,
    width: '80%',
    backgroundColor: 'red',
  },
  buttonContainer: {
    height: 40,
    width: '50%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
