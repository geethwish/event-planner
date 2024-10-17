import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { LogBox } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function AppContent() {
  const colorScheme = useColorScheme();
  const user = useSelector((state: RootState) => state.auth.user);
  LogBox.ignoreAllLogs();

  const [loaded, error] = useFonts({
    "Noto-Sans": require('../assets/fonts/noto/Noto-Sans.ttf'),
    "Noto-Sans-600": require('../assets/fonts/noto/NotoSans-SemiBold.ttf'),
    "Noto-Sans-400": require('../assets/fonts/noto/NotoSans-Regular.ttf'),
    Inter: require('../assets/fonts/inter/Inter.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  console.log(user);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, }} redirect />
        {user ? (
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        )}

        {/* Only display the 'not-found' screen if a user tries to access an undefined route */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
