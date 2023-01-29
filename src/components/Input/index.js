import { View, Image, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

const Input = ({ label, placeholder, isPassword }) => {
  const [isPasswordVisable, setIsPasswordVisable] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisable}
          placeholder={placeholder}
          style={styles.input}
        />
        <Pressable>
          <Image source={require('../../assets/eye.png')} />
        </Pressable>
      </View>
    </View>
  );
};

export default Input;
