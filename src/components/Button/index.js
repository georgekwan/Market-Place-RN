import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Button = ({ title }) => {
  return (
    <View>
      <Pressable style={styles.container}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
