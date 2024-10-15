import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormField from '@/components/form/FormField';
import CustomButton from '@/components/shared/button';
import icons from '@/constants/icons';
import { router } from 'expo-router';

const PersonalInformation = () => {

    // Personal info form schema
    const personalInfoValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    // Handle personal info submit and navigate to home page
    const handlePersonalInfoSubmit = (values: any) => {
        console.log(values);
        router.push('/home')

    }

    // Handle navigate to previous page
    const handleNavigateToPrevious = () => {
        router.push('/upload-profile-picture')
    }

    return (
        <SafeAreaView className="bg-light h-full box-border">
            <ScrollView>
                <Formik
                    initialValues={{ firstName: '', address: '', lastName: '', phoneNumber: '', email: '' }}
                    validationSchema={personalInfoValidationSchema}
                    onSubmit={handlePersonalInfoSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                        <View className='w-full min-h-[80vh] px-4 my-6 flex flex-col justify-between'>
                            <View className='mt-10'>
                                <Text className='text-xl text-text text-left font-interSans font-600'>
                                    Person Information
                                </Text>
                                <Text className='text-subText text-sm text-left mt-2 font-natoSan400'>You can add your personal data now or do it later</Text>
                                <View className='mt-5 w-full flex flex-col'>

                                    <FormField
                                        label='First Name'
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        placeholder='John'
                                        touched={touched.firstName}
                                        error={errors.firstName}
                                        name='firstName'
                                    />

                                    <FormField
                                        label='Last Name'
                                        onChangeText={handleChange('lastName')}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        placeholder='Smith'
                                        touched={touched.lastName}
                                        error={errors.lastName}
                                        name='lastName'
                                    />

                                    <FormField
                                        label='Email'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder='John.smith@example.com'
                                        touched={touched.email}
                                        error={errors.email}
                                        name='email'
                                    />

                                    <FormField
                                        label='Phone number'
                                        onChangeText={handleChange('phoneNumber')}
                                        onBlur={handleBlur}
                                        value={values.phoneNumber}
                                        placeholder='+02 9371 9090'
                                        touched={touched.phoneNumber}
                                        error={errors.phoneNumber}
                                        name='phoneNumber'
                                    />

                                    <FormField
                                        label='Mailing address'
                                        onChangeText={handleChange('address')}
                                        onBlur={handleBlur}
                                        value={values.address}
                                        placeholder='56 O’Mally Road, ST LEONARDS, 2065, NSW'
                                        touched={touched.address}
                                        error={errors.address}
                                        name='address'
                                    />
                                </View>
                            </View>
                            <View className='min-w-full mt-24 flex flex-row justify-between' style={{ columnGap: 10 }}>
                                <CustomButton
                                    onPress={handleNavigateToPrevious}
                                    label={<Text className='text-gray-900'> <Image source={icons.backArrow}
                                        className='w-[13px] h-[13px] mr-2' />Back

                                    </Text>}
                                    variant='Button'
                                    classNames='w-1/2 mb-5 bg-secondary text-gray-900'
                                />
                                <CustomButton
                                    onPress={handleSubmit}
                                    label={<>Login <Image source={icons.rightArrow}
                                        className='w-[13px] h-[13px]' /></>}
                                    variant='Button'
                                    classNames='w-1/2'
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView >
    )
}

export default PersonalInformation
