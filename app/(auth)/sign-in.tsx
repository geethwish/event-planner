import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/form/FormField';
import icons from '@/constants/icons';
import CustomButton from '@/components/shared/button';
import { router } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleRestorePassword = () => {

    };

    const handleNavigateToSingUp = () => {
        // navigate to sign up page
        router.push('/sign-up')
    }

    // Login form schema
    const loginValidationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    // Handle login
    const handleLogin = (values: any) => {
        console.log(values)
    }

    return (
        <SafeAreaView className="bg-light h-full box-border">
            <ScrollView>
                <View className='w-full min-h-[80vh] px-4 my-6 flex flex-col justify-between'>
                    <View className='mt-[30%]'>
                        <Text className='text-5xl text-text text-center font-interSans font-600'>
                            Welcome
                        </Text>
                        <Text className='text-subText text-xl text-center mt-5 font-natoSan400'>Welcome to your Portal</Text>
                    </View>
                    <Formik
                        initialValues={{ email: '', password: '', confirmPassword: '' }}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleLogin}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <>
                                <View className='mt-5 w-full flex flex-col'>

                                    <FormField
                                        label='Email'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder='john.smith@example.com'
                                        icon={icons.email}
                                        touched={touched.email}
                                        error={errors.email}
                                        name='email'
                                    />

                                    <FormField
                                        secureTextEntry={true}
                                        label='Password'
                                        onChangeText={handleChange('password')}
                                        placeholder='•••••••••' icon={icons.lock}
                                        showPassword={true}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        touched={touched.password}
                                        error={errors.password}
                                        name='password'
                                    />

                                    <CustomButton onPress={handleRestorePassword} label={<>Restore password {"  "}<Image source={icons.rightUpArrow} className='w-[13px] h-[13px] flex' /></>} variant='Link' classNames='w-full flex items-end mt-3' />

                                </View>

                                <View className='min-w-full mt-20'>
                                    <CustomButton
                                        onPress={handleSubmit}
                                        label={<>Login <Image source={icons.rightArrow}
                                            className='w-[13px] h-[13px]' /></>}
                                        variant='Button'
                                        classNames='w-full mb-5'
                                    />
                                    <CustomButton
                                        onPress={handleNavigateToSingUp}
                                        label={<>Sign Up <Image source={icons.rightArrow}
                                            className='w-[13px] h-[13px]' /></>}
                                        variant='Button'
                                        classNames='w-full'
                                    />
                                </View>
                            </>
                        )}
                    </Formik>

                </View>
            </ScrollView >

        </SafeAreaView >
    )
}

export default SignIn

const styles = StyleSheet.create({})