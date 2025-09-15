import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomButtonProps } from '@/types/CustomButtonProps';

/**
 * CustomButton component
 *
 * A reusable button component with customizable text and container styles.
 * 
 * @component
 *
 * @param {CustomButtonProps} props - The props for the component
 * @param {() => void} props.onPress - Function to call when the button is pressed
 * @param {string} props.title - The text displayed inside the button
 * @param {string} [props.textStyles] - Optional Tailwind CSS classes for the text
 * @param {string} [props.containerStyles] - Optional Tailwind CSS classes for the button container
 *
 * @example
 * <CustomButton 
 *    title="Start Meditation" 
 *    onPress={() => console.log("Pressed!")} 
 *    containerStyles="bg-blue-500"
 *    textStyles="text-white"
 * />
 */
const CustomButton = ({
    onPress,
    title,
    textStyles = "",
    containerStyles = ""
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
            onPress={onPress}
        >
            <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;
