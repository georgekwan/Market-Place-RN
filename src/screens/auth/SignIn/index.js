import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
// import Separator from '../../../components/Separator';
// import GoogleLogin from '../../../components/GoogleLogin';
import { styles } from './styles';

const Signin = ({ navigation }) => {
  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader onBackPress={onBack} title="Sign In" />

      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword={true} label="Password" placeholder="********" />

      <Button style={styles.button} title="Sign In" />

      {/* <Separator text="Or sign in with " />

      <GoogleLogin /> */}

      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(Signin);
