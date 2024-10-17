import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Avatar from './avatar'

export interface IComments {
    "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body": string
}

interface ICommentsCardProps {
    data: IComments
}
const CommentsCard: FC<ICommentsCardProps> = ({ data }) => {
    return (
        <View className='w-full  mb-2 mt-2 flex-row items-center justify-center'>
            <View className='max-w-[90%] bg-slate-100  p-4 flex-row items-center rounded-2xl' style={{ columnGap: 20 }}>
                <Avatar source={require('./../../assets/images/avatars/user1.png')} />
                <View className='flex-col box-border flex-1' style={{ rowGap: 5 }}>
                    <Text className='text-base text-formFieldText font-interSans font-600 flex-row items-center'>{data.name}  </Text>
                    <Text className='text-subText text-sm font-natoSan400 ' numberOfLines={3} ellipsizeMode='tail'>{data.body} </Text>
                </View>
            </View>
        </View>
    )
}

export default CommentsCard

const styles = StyleSheet.create({})