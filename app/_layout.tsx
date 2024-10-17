import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { LogBox } from 'react-native';
import useAuthListener from '@/hooks/useAuthLisnter';
import { fetchUserProfile, getAuthDetails } from '@/utils/auth';
import { setUser } from '@/store/auth-slice';
import Toast from 'react-native-toast-message';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function AppContent() {
  useAuthListener();
  const dispatch = useDispatch();

  const colorScheme = useColorScheme();
  const [auth, setAuth] = useState<any | null>(null);

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


  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getAuthDetails();
      if (profileData) {

        const profileDataObject = JSON.parse(profileData)

        setAuth(profileDataObject)
        try {
          const user = await fetchUserProfile(profileDataObject.uid)
          dispatch(setUser(user))
        } catch (error) {
          throw Error("User not found");
        }

      } else {
        setAuth(null)
      }
    };

    fetchProfile();
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="index" options={{ headerShown: false }} redirect />
        {auth ? (
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="(auth)" options={{
            headerShown: false,
          }} />
        )}

        {/* Only display the 'not-found' screen if a user tries to access an undefined route */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <Toast />
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
