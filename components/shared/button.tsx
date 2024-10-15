import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

interface ICustomButtonProps {
    onPress: () => void
    label: string | React.ReactElement,
    variant?: 'Button' | 'Link'
    classNames: string
}
const CustomButton: FC<ICustomButtonProps> = ({ onPress, label, variant = 'Button', classNames }) => {

    if (variant === 'Button') {
        return <TouchableOpacity
            className={`w-full h-12 bg-primary rounded-sm flex justify-center items-center ${classNames}`}
            onPress={onPress}
        >
            <Text className="text-white font-natoSan600 ont-600 text-sm">{label}</Text>

        </TouchableOpacity>
    }
    if (variant === 'Link') {
        return (
            <TouchableOpacity onPress={onPress} className={`w-full${classNames}`}>
                <Text className="text-primary flex justify-center items-center font-natoSan600">
                    {label}
                </Text>
            </TouchableOpacity>
        )
    }

}

export default CustomButton
