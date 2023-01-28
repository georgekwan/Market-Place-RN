import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Button = ({ title }) => {
  const handlePress = () => {
    console.log('button clicked!!!');
  };
  return (
    <Pressable hitSlop={20} onPress={handlePress} style={styles.container}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
