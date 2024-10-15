import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'


interface IIconButtonProps {
    children: React.ReactNode
    onPress?: () => void
}
const IconButton: FC<IIconButtonProps> = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

export default IconButton
