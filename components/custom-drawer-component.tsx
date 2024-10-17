import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Avatar from './shared/avatar'
import icons from '@/constants/icons'
import { removeUserProfile } from '@/utils/auth'
import { router } from 'expo-router'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const CustomDrawerContent: FC<DrawerContentComponentProps> = () => {
    const profile = useSelector((state: RootState) => state.auth.user);
    const handleLogout = async () => {
        await removeUserProfile();
        router.push('/sign-in');
    }
    return (
        <DrawerContentScrollView className='bg-white relative box-border'>
            <View className='p-4 border-b-2 border-[#E1E2E4] mt-[-5px]'>
                <View className='flex-row items-center'>
                    <Avatar source={{ uri: profile ? profile.profilePicture : '@/assets/images/avatars/user1.png' }} classNames='w-[44px] h-[44px]' />
                    <View className='ml-3  flex-1'>
                        <Text className='font-natoSan400 text-base text-formFieldText'>{`${profile && profile.firstName || ''} ${profile && profile.lastName || ''}`}</Text>
                        <Text className='font-natoSan400 text-sm text-subText text-ellipsis min-w-full' numberOfLines={1} ellipsizeMode='tail'>{profile && profile.email || ''}</Text>
                    </View>
                </View>
            </View>

            <DrawerItem
                icon={() => {
                    return <Image source={icons.logout} className='w-6 h-6' />
                }}
                label={() => {
                    return (
                        <TouchableOpacity onPress={handleLogout}>
                            <View className='flex-row items-center'>
                                <Text className='ml-[-10px] font-natoSan600 text-base text-[#DB2424]'>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                onPress={() => { }}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
