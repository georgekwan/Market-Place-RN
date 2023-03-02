import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { logger, consoleTransport } from 'react-native-logs';

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: 'debug',
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
  async: true,
  dateFormat: 'time',
  printLevel: true,
  printDate: true,
  enabled: true,
};

const log = logger.createLogger(defaultConfig);

/*
const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo :>> ', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleGoogleLogin}
      style={styles.container}
    >
      <Image style={styles.image} source={require('../../assets/google.png')} />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);

*/
