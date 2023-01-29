import { View, Image, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

const Input = ({ label, placeholder, isPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
          style={styles.input}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image source={require('../../assets/eye.png')} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Input;
