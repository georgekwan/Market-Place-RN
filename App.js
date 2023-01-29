import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Signup from './src/screens/auth/Signup';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App;
