import { Button, Image, TouchableOpacity, ScrollView, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';
import icons from '@/constants/icons';
import CustomButton from '@/components/shared/button';
import { router } from 'expo-router';
import ProfilePicturePicker from '@/components/shared/profile-picture-picker';


const UploadProfilePicture = () => {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleNext = () => {
        if (image === null) {
            Alert.alert("Error", "Please upload a profile picture");
        }
        else {
            // navigate to personal information page
            router.push('/personal-information')
        }
    }
    return (
        <SafeAreaView className="bg-light h-full box-border">
            <ScrollView>
                <View className='w-full min-h-[80vh] px-4 my-6 flex flex-col  justify-between'>
                    <View className='mt-[30%] w-full flex flex-col justify-center items-center'>
                        <Text className='text-[32px] text-text text-center font-interSans font-600'>
                            Welcome
                        </Text>
                        <Text className='text-subText text-xl text-center mt-5 font-natoSan400'>You are logged in for the first time and can upload a profile photo</Text>
                        <ProfilePicturePicker onPress={pickImage} image={image} />
                    </View>

                    <View className='min-w-full mt-20'>
                        <CustomButton
                            onPress={handleNext}
                            label={<>Next <Image source={icons.rightArrow}
                                className='w-[13px] h-[13px]' /></>}
                            variant='Button'
                            classNames='w-full mb-5'
                        />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UploadProfilePicture
