import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useNavigation, DrawerActions } from '@react-navigation/native';

const profile = () => {
    const navigation = useNavigation();

    const handleDrawer = () => {
        try {
            navigation.dispatch(DrawerActions.openDrawer());
        } catch (error) {
            console.error('Failed to open drawer:', error);
        }
    }
    return (
        <SafeAreaView className="bg-white h-full box-border">
            <ScrollView>
                <View className='p-4 border-b-2 border-[#E1E2E4]'>
                    <View className='flex-row items-center'>
                        <TouchableOpacity onPress={handleDrawer} style={{ zIndex: 1000 }}>
                            <Image source={require('@/assets/images/avatars/user1.png')} className='w-[44px] h-[44px]' />
                        </TouchableOpacity>
                        <Text className='absolute w-full text-center font-interSans font-600 text-[17px]'>Profile</Text>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#16162" style="dark" />
        </SafeAreaView>

    )
}

export default profile

const styles = StyleSheet.create({})