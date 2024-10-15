import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const PersonalInformation = () => {
    return (
        <SafeAreaView className="bg-light h-full box-border">
            <ScrollView>
                <View className='w-full min-h-[80vh] px-4 my-6 flex flex-col justify-between'>
                    <View className='mt-[30%]'>
                        <Text className='text-5xl text-text text-center font-interSans font-600'>
                            Person Information
                        </Text>
                        <Text className='text-subText text-xl text-center mt-5 font-natoSan400'>You are logged in for the first time and can upload a profile photo</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonalInformation
