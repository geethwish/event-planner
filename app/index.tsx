import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function App() {
    return (
        <SafeAreaView className="bg-light h-full">
            <View>
                <Text>App</Text>
                <Link href={"/profile"} style={{ color: 'blue' }}>Go to Profile</Link>
            </View>
        </SafeAreaView>
    )
}