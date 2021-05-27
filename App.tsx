import React, {useEffect} from 'react';
import {Alert} from "react-native";
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import {i18n} from "./src/lang";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            
            if (!status) {
                Alert.alert(
                    `${i18n.t('errorAlertTitle')}`,
                    `${i18n.t('errorAlertMessage')}`
                )
            }
        })();
    }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
        <StatusBar style='dark'/>
      </SafeAreaProvider>
    );
  }
}
