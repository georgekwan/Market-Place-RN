import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

const Splash = () => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/splash_image.png')}
      />
      <Text>You'll Find All You Need Here</Text>
    </View>
  );
};

export default Splash;
