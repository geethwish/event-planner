import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

interface IAvatarProps {
    classNames?: string,
    source: ImageSourcePropType
}

const Avatar: FC<IAvatarProps> = ({ classNames, source, }) => {
    return (
        <TouchableOpacity>
            <Image source={source} resizeMode='contain' className={`${classNames ? classNames : 'h-11 w-11'} rounded-full`} />
        </TouchableOpacity>
    )
}

export default Avatar
