import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Signup from './src/screens/auth/Signup';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

const WEB_CLIENT_ID =
  '942313350309-h8sv9kqncff6qu526qbmff0k6qedjocl.apps.googleusercontent.com';

const App = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });
  }, []);
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App;
