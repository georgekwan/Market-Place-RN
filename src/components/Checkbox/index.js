import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Checkbox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onCheck}
      style={styles.container}
    >
      {checked ? (
        <View style={styles.container}>
          <Image
            style={StyleSheet.checkIcon}
            source={require('../../assets/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Checkbox;
