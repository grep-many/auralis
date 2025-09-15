import { Tabs } from "expo-router";
import React from "react";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#fff", // bright white for visibility
                tabBarInactiveTintColor: "rgba(255,255,255,0.6)", // semi-transparent white
                tabBarBackground: () => (
                    <LinearGradient
                        colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]} // subtle gradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={{
                            flex: 1,
                        }}
                    />
                ),
                tabBarStyle: {
                    position: "absolute",
                    elevation: 0,
                    borderTopWidth: 0,
                    height: 70,
                    paddingBottom: 10,
                },
            }}
        >
            <Tabs.Screen
                name="nature-meditate"
                options={{
                    tabBarLabel: "Meditate",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="flower-tulip"
                            size={28}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="affirmations"
                options={{
                    tabBarLabel: "Affirmations",
                    tabBarIcon: ({ color }) => (
                        <Entypo
                            name="open-book"
                            size={28}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
