import { TimerProvider } from "@/context/TimerContext";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
  });

  const [firstLaunch, setFirstLaunch] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();

    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem("hasLaunched");
        if (value === null) {
          // First launch
          setFirstLaunch(true);
          await AsyncStorage.setItem("hasLaunched", "true");
        } else {
          // Not first launch
          setFirstLaunch(false);
        }
      } catch (e) {
        console.log("Error reading first launch flag:", e);
        setFirstLaunch(false);
      }
    };

    checkFirstLaunch();
  }, [fontsLoaded, error]);

  if (!fontsLoaded || firstLaunch === null) return null; // wait for fonts & storage check

  return (
    <SafeAreaProvider>
      <TimerProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {firstLaunch ? (
            <Stack.Screen name="index" /> // show Get Started screen
          ) : (
            <Stack.Screen name="(tabs)/nature-meditate" /> // show meditation screen
          )}
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="meditate/[id]" />
          <Stack.Screen name="(modal)/adjust-meditation-duration" />
        </Stack>
      </TimerProvider>
    </SafeAreaProvider>
  );
}
