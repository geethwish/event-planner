import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/form/FormField'
import icons from '@/constants/icons'
import CustomButton from '@/components/shared/button'
import { router } from 'expo-router'
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(true);

    // Signup form schema
    const signupValidationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm password is required'),
    });

    // Handle signup
    const handleSingUp = (values: any) => {
        console.log(values);

    }

    // Navigate to login page
    const handleNavigateToLogin = () => {
        router.push('/sign-in')
    }

    return (
        <SafeAreaView className="bg-light h-full box-border">
            <ScrollView>
                <View className='w-full min-h-[80vh] px-4 my-6 flex flex-col justify-between'>
                    <View className='mt-[30%]'>
                        <Text className='text-[32px] text-text text-center font-interSans font-600'>
                            Welcome
                        </Text>
                        <Text className='text-subText text-sm text-center mt-5 font-natoSan400'>Welcome to your Portal</Text>
                    </View>
                    <Formik
                        initialValues={{ email: '', password: '', confirmPassword: '' }}
                        validationSchema={signupValidationSchema}
                        onSubmit={handleSingUp}
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

                                    <FormField
                                        secureTextEntry={true}
                                        label='Confirm Password'
                                        onChangeText={handleChange('confirmPassword')}
                                        placeholder='•••••••••'
                                        icon={icons.lock}
                                        showPassword={true}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword || ''}
                                        touched={touched.confirmPassword}
                                        error={errors.confirmPassword}
                                        name='confirmPassword'
                                    />

                                </View>

                                <View className='min-w-full mt-20'>
                                    <CustomButton
                                        onPress={handleSubmit}
                                        label={<>Sign Up <Image source={icons.rightArrow}
                                            className='w-[13px] h-[13px]' /></>}
                                        variant='Button'
                                        classNames='w-full mb-5'
                                    />

                                    <CustomButton
                                        onPress={handleNavigateToLogin}
                                        label={<>Login <Image source={icons.rightArrow}
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

export default SignUp