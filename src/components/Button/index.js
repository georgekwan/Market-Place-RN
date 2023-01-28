import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Button = ({ title }) => {
  const handlePress = () => {
    console.log('button clicked!!!');
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handlePress}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
