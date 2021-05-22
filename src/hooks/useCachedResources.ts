import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Keep the splash screen visible while we fetch resources
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn('useCachedResources', e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
