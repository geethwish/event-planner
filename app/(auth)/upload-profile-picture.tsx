import { Button, Image, TouchableOpacity, ScrollView, Text, View, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';
import icons from '@/constants/icons';
import CustomButton from '@/components/shared/button';
import { router, useNavigation } from 'expo-router';
import ProfilePicturePicker from '@/components/shared/profile-picture-picker';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { fireStorage, firestore } from '@/config/firebaseConfig';
import { updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';


const UploadProfilePicture = () => {
    const user = useSelector((state: RootState) => state.auth.auth);
    const userProfile = useSelector((state: RootState) => state.auth.user);

    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const pickImage = async () => {
        setIsEditing(true)
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleNext = async () => {

        if (isEditing) {
            if (image === null) {
                Alert.alert("Error", "Please upload a profile picture");
            }
            else {
                setIsLoading(true)
                // Convert the image to a blob
                const response = await fetch(image);
                const blob = await response.blob();

                // Upload the image to firebase storage
                const imageRef = ref(fireStorage, `profilePictures/${user.uid}`);

                // Create image upload task
                const uploadTask = await uploadBytesResumable(imageRef, blob);

                // Get the download URL
                const downloadURL = await getDownloadURL(uploadTask.ref);

                try {
                    // Update the user profile with the photoURL
                    await updateProfile(user, {
                        photoURL: downloadURL,
                    });

                    // Update the user profile in firestore
                    await setDoc(doc(firestore, 'users', user.uid), {
                        profilePicture: downloadURL,
                        updatedAt: new Date(),
                    }, { merge: true });

                    setIsLoading(false)
                    // navigate to personal information page
                    router.push('/personal-information')
                } catch (error: any) {

                    setIsLoading(false)

                    Alert.alert("Error", error.message);
                }
            }
        } else {
            if (image !== null) {

                router.push('/personal-information')
            }
        }
    }

    useEffect(() => {
        // Check if the user has a profile picture
        if (userProfile.profilePicture) {
            setImage(userProfile.profilePicture)
        }
    }, [userProfile])

    return (
        <SafeAreaView className="bg-light h-full box-border flex-row items-center justify-center">
            <ScrollView className='h-full'>
                <View className='flex'>
                    <View className='w-full min-h-full  px-4 my-6 flex-col justify-center'>
                        <View className='w-full flex-col justify-center items-center'>
                            <Text className='text-[32px] text-text text-center font-interSans font-600'>
                                Welcome
                            </Text>
                            <Text className='text-subText text-xl text-center mt-5 font-natoSan400'>You are logged in for the first time and can upload a profile photo</Text>
                            <ProfilePicturePicker onPress={pickImage} image={image} />
                        </View>
                    </View>
                    <View className='p-4 min-w-full mt-[8%]'>
                        <CustomButton
                            onPress={handleNext}
                            label={
                                isLoading ? (
                                    <ActivityIndicator color="white" />
                                ) : (
                                    <>Next <Image source={icons.rightArrow}
                                        className='w-[13px] h-[13px]' /></>)
                            }
                            variant='Button'
                            classNames='w-full mb-5'
                            disabled={image === null}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default UploadProfilePicture
