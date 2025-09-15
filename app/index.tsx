import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";
import "./global.css";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {

    const router = useRouter();

    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <ImageBackground
                source={beachImage}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                    {/* ScrollView ensures content is scrollable if needed */}
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <SafeAreaView className="flex-1 px-1 justify-between">
                            <View className="flex-1 justify-center items-center px-4">
                                <Text className="text-white text-6xl font-extrabold text-center">
                                    Auralis
                                </Text>
                                <Text className="text-white text-xl md:text-2xl text-center mt-4 leading-relaxed">
                                    Begin your mindfulness journey with guided meditations and soothing sounds.
                                </Text>
                            </View>
                            <View>
                                <CustomButton
                                    onPress={() => router.push("/nature-meditate")}
                                    title="Get Started"
                                />
                            </View>
                        </SafeAreaView>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
        </SafeAreaProvider>
    );
}

export default App;