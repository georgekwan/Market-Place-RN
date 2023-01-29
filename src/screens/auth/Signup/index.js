import React from 'react';
import { View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import { styles } from './styles';

const Signup = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />

      <Input label="Email" />
    </View>
  );
};

export default Signup;
