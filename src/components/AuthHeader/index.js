import { Pressable, Text, View, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

const AuthHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <Pressable hitStop={20} onPress={onBackPress}>
        <Image
          style={styles.image}
          source={require('../../assets/auth_back.png')}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
