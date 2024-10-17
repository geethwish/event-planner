import { View, Text, ScrollView, Image, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/form/FormField'
import icons from '@/constants/icons'
import CustomButton from '@/components/shared/button'
import { router } from 'expo-router'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, firestore } from '@/config/firebaseConfig'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/auth-slice'
import { getSignUpErrorMessage } from '@/utils/authentication-errors'
import MessageAlert from '@/components/shared/message-alert-notification'
import { doc, setDoc } from 'firebase/firestore';
import profile from '../(drawer)/(tabs)/profile'
import Toast from 'react-native-toast-message'

const SignUp = () => {
    const dispatch = useDispatch();
    const [registerError, setRegisterError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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
    const handleSingUp = async (values: any) => {
        setRegisterError(null);
        setIsLoading(true);

        try {
            // Create user with firebase auth
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = { email: userCredential.user.email, uid: userCredential.user.uid };

            dispatch(setUser(user));

            try {

                // Create userProfile record in firestore and default values added
                setDoc(doc(firestore, 'users', user.uid), {
                    email: user.email,
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    address: '',
                    isCompletedInitialSetup: false,
                    profilePicture: '',
                    createdAt: new Date()
                });

                Toast.show({
                    type: "success",
                    text1: "Success",
                    text2: 'Account created successfully, Please upload your profile picture and continue',
                });

                router.push('/upload-profile-picture');

            } catch (error: any) {
                Toast.show({
                    type: "error",
                    text1: "Error",
                    text2: error.message,
                });

            }

            setIsLoading(false);

            // dispatch(setUser(user));
        } catch (error: any) {
            console.error(error);
            setRegisterError(getSignUpErrorMessage(error.code))

            setIsLoading(false);
        }

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
                        {
                            registerError && <MessageAlert message={registerError} variant='error' />
                        }
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
                                        disabled={isLoading}
                                        label={
                                            isLoading ? (
                                                <ActivityIndicator color="white" />
                                            ) : (
                                                <>Sign Up <Image source={icons.rightArrow}
                                                    className='w-[13px] h-[13px]' /></>)
                                        }
                                        variant='Button'
                                        classNames='w-full mb-5'
                                    />

                                    <CustomButton
                                        disabled={isLoading}
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