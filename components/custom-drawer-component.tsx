import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Avatar from './shared/avatar'
import icons from '@/constants/icons'

const CustomDrawerContent: FC<DrawerContentComponentProps> = () => {
    return (
        <DrawerContentScrollView className='bg-white relative box-border'>
            <View className='p-4 border-b-2 border-[#E1E2E4] mt-[-5px]'>
                <View className='flex-row items-center'>
                    <Avatar source={require('@/assets/images/avatars/user1.png')} classNames='w-[44px] h-[44px]' />
                    <View className='ml-3  flex-1'>
                        <Text className='font-natoSan400 text-base text-formFieldText'>John Smith</Text>
                        <Text className='font-natoSan400 text-sm text-subText text-ellipsis min-w-full' numberOfLines={1} ellipsizeMode='tail'>john.smith@gmail.com</Text>
                    </View>
                </View>
            </View>

            <DrawerItem
                icon={() => {
                    return <Image source={icons.logout} className='w-6 h-6' />
                }}
                label={() => {
                    return (
                        <View className='flex-row items-center'>
                            <Text className='ml-[-10px] font-natoSan600 text-base text-[#DB2424]'>Logout</Text>
                        </View>
                    )
                }}
                onPress={() => { }}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
