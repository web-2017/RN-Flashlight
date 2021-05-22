import React, {useEffect} from 'react';
import {Alert} from "react-native";
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            
            if (!status) {
                Alert.alert(
                    'Доступ к вспышке отключен',
                    'Нам необходимо разраешения для доступа к вспышке телефона, влючите его'
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
        <StatusBar/>
      </SafeAreaProvider>
    );
  }
}
