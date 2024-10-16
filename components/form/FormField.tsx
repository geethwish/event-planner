import { Image, ImageSourcePropType, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import icons from '@/constants/icons'
import { Colors } from '@/constants/Colors'


interface IFormFieldProps {
    label: string
    value: string
    onChangeText: (value: string) => void
    placeholder: string
    secureTextEntry?: boolean,
    icon?: ImageSourcePropType,
    showPassword?: boolean,
    onBlur: (key: string) => void
    touched?: boolean
    error?: string
    name: string
}

const FormField: FC<IFormFieldProps> = ({ label, value, onChangeText, placeholder, secureTextEntry = false, showPassword = false, icon, onBlur, touched, error, name }) => {
    const [showPasswordText, setShowPasswordText] = useState(false);

    return (
        <View className='w-full'>
            <Text className='text-base text-formFieldText font-natoSans font-500 ml-5 mb-3'>{label}</Text>
            <View className='relative'>
                {
                    icon !== undefined && <Image source={icon} className='w-[20px] h-[20px] absolute left-5 top-[14px] z-40' resizeMode='contain' />
                }

                <TextInput
                    className={`w-full h-12 border border-b-1 bg-secondary border-secondary rounded-sm ${icon !== undefined ? 'px-12' : 'px-5'} ${touched && error ? 'mb-1 border-danger' : 'mb-4  border-b-gray-300'} mb-4 text-formFieldText font-natoSan400 font-400 text-base`}
                    placeholderTextColor="#A0A0A0"
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry && !showPasswordText}
                    onBlur={(e) => onBlur(name)}
                />
                {
                    showPassword && <TouchableOpacity onPress={() => setShowPasswordText(!showPasswordText)} className='absolute right-2 top-[14px]'>
                        <Image
                            source={!showPasswordText ? icons.hideEye : icons.eye}
                            className='w-[20px] h-[20px]'
                            resizeMode='contain'
                            tintColor={Colors.light.formFieldText}
                        />
                    </TouchableOpacity>
                }
            </View>
            {touched && error && <Text className='text-danger mb-3 ml-4 font-natoSan400'>{error}</Text>}
        </View>
    )
}

export default FormField

const styles = StyleSheet.create({})