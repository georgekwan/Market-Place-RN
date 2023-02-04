import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Seperator = ({ text }) => {
  return (
    <View>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default React.memo(Seperator);
