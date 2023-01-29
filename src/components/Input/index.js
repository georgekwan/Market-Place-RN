import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Input = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

export default Input;
