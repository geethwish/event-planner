import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC } from 'react'

interface IFormFieldProps {
    label: string
    value?: string
    onChangeText: (value: string) => void
    placeholder: string
    secureTextEntry?: boolean

}

const FormField: FC<IFormFieldProps> = ({ label, value, onChangeText, placeholder, secureTextEntry = false }) => {
    return (
        <View className='w-full'>
            <Text className='text-base text-formFieldText font-natoSans font-500 ml-5 mb-3'>{label}</Text>
            <TextInput
                className="w-full h-12 border border-gray-300 rounded-md px-4 mb-4 text-formFieldText
                "
                placeholderTextColor="#A0A0A0"
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default FormField

const styles = StyleSheet.create({})