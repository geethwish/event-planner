import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/form/FormField';
import icons from '@/constants/icons';
import CustomButton from '@/components/shared/button';
import { router } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from '@/config/firebaseConfig';
import { getErrorMessage } from '@/utils/authentication-errors';
import MessageAlert from '@/components/shared/message-alert-notification';
import { setAuth, setUser } from '@/store/auth-slice';
import { doc, getDoc } from 'firebase/firestore';


const SignIn = () => {
    const [loginError, setLoginError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

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

    // Get user profile details from firestore using account uid
    const getUserData = async (uid: string) => {
        const userDocRef = doc(firestore, 'users', uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            return userDocSnap.data();
        } else {
            setLoginError("No such user!");
            return null;
        }
    };

    // Handle login
    const handleLogin = async (values: any) => {
        setLoginError(null);
        setIsLoading(true);

        try {
            // Sign in user with firebase auth
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);

            const user = { email: userCredential.user.email, uid: userCredential.user.uid };

            // get user profile details from firestore

            const profileDetails: any = await getUserData(user.uid)

            const userProfile = {
                ...user,
                ...profileDetails
            }

            delete userProfile.createdAt

            // Save user details on global store
            dispatch(setUser(userProfile));
            dispatch(setAuth(userCredential.user));

            setIsLoading(false);

            if (!userProfile.isCompletedInitialSetup) {
                // Navigate to upload profile picture page
                router.push('/upload-profile-picture')

            }



        } catch (error: any) {
            // Set error message
            setLoginError(getErrorMessage(error.code));

            // Stop showing loading spinner
            setIsLoading(false);
        }

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
                            loginError && <MessageAlert message={loginError} variant='error' />
                        }
                    </View>
                    <Formik
                        initialValues={{ email: '', password: '' }}
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
                                        disabled={isLoading}
                                        onPress={handleSubmit}
                                        label={
                                            isLoading ? (
                                                <ActivityIndicator color="white" />
                                            ) : (
                                                <>Login <Image source={icons.rightArrow}
                                                    className='w-[13px] h-[13px]' /></>)
                                        }
                                        variant='Button'
                                        classNames='w-full mb-5'
                                    />

                                    <CustomButton
                                        disabled={isLoading}
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