import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import icons from '@/constants/icons'

interface IProfilePicturePickerProps {
    onPress: () => void
    image: string | null
    classNames?: string
}

const ProfilePicturePicker: FC<IProfilePicturePickerProps> = ({ onPress, image, classNames = 'mt-10' }) => {
    const [isLoading, setLoading] = useState(true)

    return (
        <TouchableOpacity onPress={onPress} className={`h-[116px] w-[116px] bg-secondary rounded-full ${classNames}`} >
            <View className='flex justify-center items-center h-full'>
                {image && <Image source={{ uri: image }} className='w-full h-full rounded-full' />}
                <Image source={icons.camera} resizeMode='contain' className='w-6 h-6 absolute top-[48px]' onLoadEnd={() => setLoading(false)} />
            </View>
        </TouchableOpacity>
    )
}

export default ProfilePicturePicker