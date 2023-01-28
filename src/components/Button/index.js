import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ title }) => {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
