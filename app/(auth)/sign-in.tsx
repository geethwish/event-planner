import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/form/FormField';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = () => {

    };

    return (
        <SafeAreaView className="bg-light h-full">
            <ScrollView>
                <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
                    <View>
                        <Text className='text-5xl text-text text-center font-interSans font-600'>
                            Welcome
                        </Text>
                        <Text className='text-subText text-xl text-center mt-5'>Welcome to your Portal</Text>
                    </View>
                    <View className='mt-5'>
                        <FormField label='Email' value={email} onChangeText={(value) => setEmail(value)} placeholder='Email' />
                        <FormField secureTextEntry label='Password' value={password} onChangeText={(value) => setPassword(value)} placeholder='*******' />

                        <TouchableOpacity
                            className="w-full h-12 bg-primary rounded-md justify-center items-center"
                            onPress={handleAuth}
                        >
                            <Text className="text-white font-bold">{isLogin ? 'Login' : 'Sign Up'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsLogin(!isLogin)} className="mt-4">
                            <Text className="text-blue-500">
                                {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({})