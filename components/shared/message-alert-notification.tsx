import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface IMessageAlertProps {
    message: string,
    variant?: 'success' | 'error' | 'warning' | 'info',
    classNames?: string
}
const MessageAlert: FC<IMessageAlertProps> = ({ message, variant = "success", classNames = "mt-5" }) => {

    const getMessageAlertContainerClasses = (variant: 'success' | 'error' | 'warning' | 'info') => {
        if (variant === 'success') {
            return 'bg-green-400'
        }
        if (variant === 'info') {
            return 'bg-blue-400'
        }
        if (variant === 'error') {
            return 'bg-red-200'
        }
        if (variant === 'warning') {
            return 'bg-orange-400'
        }
    }
    const getMessageAlertTextClasses = (variant: 'success' | 'error' | 'warning' | 'info') => {
        if (variant === 'success' || variant === 'info' || variant === 'warning') {
            return 'text-white'
        }
        return 'text-primary'
    }

    return (
        <View className={`w-full p-4 flex-row items-center justify-center rounded-sm  ${getMessageAlertContainerClasses(variant)} ${classNames}`}>
            <Text className={`font-natoSan400 text-lg ${getMessageAlertTextClasses(variant)} `}>{message}</Text>
        </View>
    )
}

export default MessageAlert
