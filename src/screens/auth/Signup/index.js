import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import { styles } from './styles';

const Signup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />

      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword={true} label="Password" placeholder="********" />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>I agree with Terms & Privacy</Text>
      </View>
    </View>
  );
};

export default Signup;
