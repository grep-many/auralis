import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { GalleryPreviewData } from '@/types/ComponentProps'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import AppGradient from '@/components/AppGradient'
import { AntDesign } from '@expo/vector-icons'

const AffimationRoute = () => {

    const { itemId } = useLocalSearchParams()


    const [affirmation, setAffirmation] = useState<GalleryPreviewData>()
    const [sentences, setSentences] = useState<string[]>();

    useEffect(() => {
        if (!itemId) return;

        const affirmationToStart = AFFIRMATION_GALLERY
            .flatMap((gallery) => gallery.data) // combine all data arrays into one
            .find((a) => a.id === Number(itemId)); // find by id

        if (affirmationToStart) {
            setAffirmation(affirmationToStart);

            // split into sentences, trim, and filter out empty ones
            const affirmationArray = affirmationToStart.text
                .split(".")
                .map((s) => s.trim())
                .filter((s) => s.length > 0);

            setSentences(affirmationArray);
        }
    }, [itemId]); // ✅ reacts to route changes

    return (
        <View className='flex-1'>
            <ImageBackground source={affirmation?.image} resizeMode='cover' className='flex-1'>
                <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                    <Pressable
                        onPress={() => router.back()}
                        className='absolute top-16 left-6 z-10'
                    >
                        <AntDesign name="left-circle" size={50} color="white" />
                    </Pressable>
                    <ScrollView
                        className='mt-28'
                        showsVerticalScrollIndicator={false}
                    >
                        <View className='h-full justify-center'>
                            <View className='h-4/5 justify-center'>
                                {sentences?.map((line, index) => (<Text key={index} className='text-white text-3xl mb-12 font-bold text-center'>
                                    {line}.
                                </Text>))}
                            </View>
                        </View>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default AffimationRoute