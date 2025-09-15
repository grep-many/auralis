import { Link } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Page = () => {
    return (
        <LinearGradient
            // A soft, premium gradient (purple → indigo → teal)
            colors={["#8B5CF6", "#6366F1", "#14B8A6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-1"
        >
            <View className="flex-1 items-center justify-center px-6">
                <Text className="text-3xl font-bold text-white mb-2 text-center">
                    Oops! Page not found
                </Text>
                <Text className="text-base text-white/90 mb-8 text-center">
                    Looks like you’re lost. Let’s guide you back to peace ✨
                </Text>

                <Link href="/(tabs)/nature-meditate" asChild>
                    <Pressable className="bg-white px-6 py-3 rounded-full shadow-lg">
                        <Text className="text-blue-500 font-semibold text-lg">
                            Ready to Meditate
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </LinearGradient>
    );
};

export default Page;
