import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />
                <Stack.Screen name="upload-profile-picture" options={{ headerShown: false }} />
                <Stack.Screen name="personal-information" options={{ headerShown: false }} />
            </Stack>
            <StatusBar backgroundColor="#16162" style="dark" />
        </>

    )
}

export default AuthLayout

const styles = StyleSheet.create({})