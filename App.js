import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Splash from './src/screens/auth/Splash';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <SafeAreaView>
      <Splash />
    </SafeAreaView>
  );
}
