import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import React, {  useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, Vibration, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import CustomButton from "@/components/CustomButton";

import MEDITATION_IMAGES from "@/constants/meditation-images";
import { useTimer } from "@/context/TimerContext";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/MeditationData";

const Page = () => {
    const { id } = useLocalSearchParams();

    const { duration: secondsRemaining, setDuration } = useTimer();

    const [isMeditating, setMeditating] = useState(false);
    const [audioSound, setSound] = useState<Audio.Sound>();
    const [isPlayingAudio, setPlayingAudio] = useState(false);

    useEffect(() => {
        let timerId: ReturnType<typeof setTimeout>;

        // Exit early when we reach 0
        if (secondsRemaining === 0) {
            if (isPlayingAudio) audioSound?.pauseAsync();
            setMeditating(false);
            Vibration.vibrate(500);
            setPlayingAudio(false);
            return;
        }

        if (isMeditating) {
            // Save the interval ID to clear it when the component unmounts
            timerId = setTimeout(() => {
                setDuration(secondsRemaining - 1);
            }, 1000);
        }

        // Clear timeout if the component is unmounted or the time left changes
        return () => {
            clearTimeout(timerId);
        };
    }, [secondsRemaining, isMeditating, audioSound, isPlayingAudio, setDuration]);

    useEffect(() => {
        return () => {
            audioSound?.unloadAsync();
        };
    }, [audioSound, setDuration]);

    const initializeSound = async () => {
        const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

        const { sound } = await Audio.Sound.createAsync(
            AUDIO_FILES[audioFileName]
        );
        setSound(sound);
        return sound;
    };

    const togglePlayPause = async () => {
        const sound = audioSound ? audioSound : await initializeSound();

        const status = await sound?.getStatusAsync();

        if (status?.isLoaded && !isPlayingAudio) {
            await sound?.playAsync();
            setPlayingAudio(true);
        } else {
            await sound?.pauseAsync();
            setPlayingAudio(false);
        }
    };

    async function toggleMeditationSessionStatus() {

        setMeditating(!isMeditating);

        await togglePlayPause();
    }

    const handleAdjustDuration = () => {
        if (isMeditating) toggleMeditationSessionStatus();

        router.push("/(modal)/adjust-meditation-duration");
    };

    // Format the timeLeft to ensure two digits are displayed
    const formattedTimeMinutes = String(
        Math.floor(secondsRemaining / 60)
    ).padStart(2, "0");
    const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

    return (
        <View className="flex-1">
            <ImageBackground
                source={MEDITATION_IMAGES[Number(id) - 1]}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
                    <Pressable
                        onPress={() => router.back()}
                        className="absolute top-16 left-6 z-10"
                    >
                        <AntDesign name="left-circle" size={50} color="white" />
                    </Pressable>

                    <View className="flex-1 justify-center">
                        <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center shadow-lg border border-neutral-300">
                            <Text className="text-4xl text-blue-800 font-rmono">
                                {formattedTimeMinutes}.{formattedTimeSeconds}
                            </Text>
                        </View>
                    </View>

                    <View className="mb-5">
                        <CustomButton
                            title="Adjust duration"
                            onPress={handleAdjustDuration}
                        />
                        <CustomButton
                            title={isMeditating ? "Stop" : "Start Meditation"}
                            onPress={toggleMeditationSessionStatus}
                            containerStyles="mt-4"
                        />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default Page;