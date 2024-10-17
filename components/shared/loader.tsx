import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native'

const Loader = () => {
    const animation = useRef<LottieView>(null);
    return (
        <View className='min-h-full min-w-full flex-row items-center justify-center'>
            <LottieView
                source={require('../../assets/animation/loading.json')}
                autoPlay
                loop

                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
            />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({})