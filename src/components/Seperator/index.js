import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Seperator = ({ text }) => {
  return (
    <View>
      <View style={styles.line} />
      <Text>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default React.memo(Seperator);
