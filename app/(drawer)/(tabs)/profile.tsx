import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import ProfileInfoForm from '@/components/form/profile-info-form';
import icons from '@/constants/icons';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { doc, setDoc } from 'firebase/firestore';
import { fireStorage, firestore } from '@/config/firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const profile = () => {
    const navigation = useNavigation();
    const profile = useSelector((state: RootState) => state.auth.user);
    const auth = useSelector((state: RootState) => state.auth.auth);

    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isImageUploading, setIsImageUploading] = useState(false);

    // Open Side Menu
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

    const handleSubmit = async (values: any) => {

        setIsLoading(true)

        let downloadURL = profile.profilePicture;

        if (isImageUploading) {

            const response = await fetch(values.profilePicture);
            const blob = await response.blob();

            // Upload the image to firebase storage
            const imageRef = ref(fireStorage, `profilePictures/${auth.uid}`);

            // Create image upload task
            const uploadTask = await uploadBytesResumable(imageRef, blob);

            // Get the download URL
            downloadURL = await getDownloadURL(uploadTask.ref);

        }
        try {
            await setDoc(doc(firestore, 'users', auth.uid), {
                ...values,
                updatedAt: new Date(),
                profilePicture: downloadURL
            }, { merge: true });

            setIsLoading(false)
            setIsEditing(false)
            Toast.show({
                type: "success",
                text1: "Updated",
                text2: 'Profile updated successfully',
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: error.message,
            });
            setIsLoading(false)
        }
    }

    return (
        <SafeAreaView className="bg-white h-full box-border">
            <KeyboardAwareScrollView>
                <View className='p-4 border-b-2 border-[#E1E2E4]'>
                    <View className='flex-row items-center'>
                        {
                            !isEditing ? <TouchableOpacity onPress={handleDrawer} style={{ zIndex: 1000 }}>
                                <Image source={{ uri: profile?.profilePicture ?? '' }} className='w-[44px] h-[44px] rounded-full' />
                            </TouchableOpacity> : <TouchableOpacity onPress={() => setIsEditing((prev) => !prev)} style={{ zIndex: 1000 }}>
                                <Image source={icons.backArrow} className='w-[16px] h-[16px]' />
                            </TouchableOpacity>
                        }

                        <Text className='absolute w-full text-center font-interSans font-600 text-[17px]'>{isEditing && 'Edit'} Profile</Text>
                    </View>
                </View>


                <View>
                    <ProfileInfoForm onSubmit={handleSubmit} onModeChange={handleFormModeChange} isEditing={isEditing} data={profile} isLoading={isLoading} handleImageChangeStatus={(status) => { setIsImageUploading(status) }} />
                </View>

                <StatusBar backgroundColor="#16162" style="dark" />
            </KeyboardAwareScrollView>
        </SafeAreaView>

    )
}

export default profile

const styles = StyleSheet.create({})