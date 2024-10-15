import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Avatar from './avatar'
import icons from '@/constants/icons'
import IconButton from './icon-button'

interface IOrganizerCardProps {
    user: {
        id: number,
        name: string,
        username: string,
        email: string,
        profilePic: ImageSourcePropType,
        address?: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: string,
                lng: string
            }
        },
        phone: string,
        website: string,
        company?: {
            name: string,
            catchPhrase: string,
            bs: string
        }
    }
}
const OrganizerCard: FC<IOrganizerCardProps> = ({ user }) => {

    return (
        <View className='flex-row items-center p-4 bg-white shadow-sm rounded-sm'>
            <Avatar source={user.profilePic} />
            <View className='flex-1 ml-4'>

                <Text className='font-natoSan400 text-base text-[#191C1E]'>{user.name}</Text>
                <Text className='font-natoSan400 text-sm text-subText'>{user.username}</Text>
            </View>
            <IconButton>
                <Image source={icons.message} className='w-6 h-6' />
            </IconButton>

        </View>
    )
}

export default OrganizerCard
