import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Link } from 'expo-router'
import icons from '@/constants/icons'

interface ISectionTitleProps {
    title: string
    link?: {
        url: string
        text: string
    }
}

const SectionTitle: FC<ISectionTitleProps> = ({ title, link }) => {
    return (
        <View className='flex-row items-center justify-between'>
            <Text className='text-[26px] font-interSans font-600'>{title}</Text>
            {
                link !== undefined && <Link href={link.url as any}>
                    <TouchableOpacity className='flex-row items-center'>
                        <Text className='font-natoSan600 text-primary'>{link.text}</Text>
                        <Image source={icons.rightArrowPrimary} className='w-5 h-5' />
                    </TouchableOpacity>
                </Link>
            }
        </View>
    )
}

export default SectionTitle
