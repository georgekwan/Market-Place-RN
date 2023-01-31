import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Checkbox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}
    >
      {checked ? (<View><Image source={require()}/></View>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
