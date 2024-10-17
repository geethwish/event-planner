import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import ProfileInfoForm from '@/components/form/profile-info-form';
import icons from '@/constants/icons';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const profile = () => {
    const navigation = useNavigation();
    const profile = useSelector((state: RootState) => state.auth.user);

    const [isEditing, setIsEditing] = React.useState(false);

    const handleDrawer = () => {
        try {
            navigation.dispatch(DrawerActions.openDrawer());
        } catch (error) {
            console.error('Failed to open drawer:', error);
        }
    }

    const handleFormModeChange = (status: boolean) => {
        setIsEditing(status);
    }

    const handleSubmit = (values: any) => {
        console.log(values);

    }

    return (
        <SafeAreaView className="bg-white h-full box-border">
            <View className='p-4 border-b-2 border-[#E1E2E4]'>
                <View className='flex-row items-center'>
                    {
                        !isEditing ? <TouchableOpacity onPress={handleDrawer} style={{ zIndex: 1000 }}>
                            <Image source={{ uri: profile.profilePicture ?? '' }} className='w-[44px] h-[44px] rounded-full' />
                        </TouchableOpacity> : <TouchableOpacity onPress={() => setIsEditing((prev) => !prev)} style={{ zIndex: 1000 }}>
                            <Image source={icons.backArrow} className='w-[16px] h-[16px]' />
                        </TouchableOpacity>
                    }

                    <Text className='absolute w-full text-center font-interSans font-600 text-[17px]'>{isEditing && 'Edit'} Profile</Text>
                </View>
            </View>
            <ScrollView>

                <View>
                    <ProfileInfoForm onSubmit={handleSubmit} onModeChange={handleFormModeChange} isEditing={isEditing} />
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#16162" style="dark" />
        </SafeAreaView>

    )
}

export default profile

const styles = StyleSheet.create({})