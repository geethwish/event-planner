import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import FormField from './FormField';
import CustomButton from '../shared/button';
import Avatar from '../shared/avatar';
import ProfilePicturePicker from '../shared/profile-picture-picker';
import * as ImagePicker from 'expo-image-picker';

interface IProfileInfoFormProps {
    onSubmit: ([key]: any) => void;
    onModeChange: (status: boolean) => void;
    isEditing: boolean;
}

const ProfileInfoForm: FC<IProfileInfoFormProps> = ({ onSubmit, onModeChange, isEditing }) => {

    const [image, setImage] = useState<string | null>(null);

    const personalInfoValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

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
    }
    const handleEditForm = () => {
        onModeChange(!isEditing);
    }

    return (
        <Formik
            initialValues={{ firstName: '', address: '', lastName: '', phoneNumber: '', email: '' }}
            validationSchema={personalInfoValidationSchema}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                <View className='w-full px-4 my-6 flex flex-col'>
                    <View className='flex-row items-center justify-center mb-5'>
                        {
                            !isEditing ? <Avatar source={require('./../../assets/images/avatars/user1.png')} classNames='w-[116px] h-[116px]' /> : <ProfilePicturePicker onPress={pickImage} image={image} classNames='mt-0' />
                        }

                    </View>
                    <View>
                        <View className='w-full flex flex-col'>

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
                    <View className='min-w-full mt-5'>
                        {
                            !isEditing ? <CustomButton
                                onPress={handleEditForm}
                                label="Edit"
                                variant='Button'
                                classNames='w-full'
                            /> : <CustomButton
                                onPress={handleSubmit}
                                label={"Save"}
                                variant='Button'
                                classNames='w-full'
                            />
                        }

                    </View>
                </View>
            )}
        </Formik>
    )
}

export default ProfileInfoForm

const styles = StyleSheet.create({})