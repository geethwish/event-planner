import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface IImageListProps {
    albumId: number,
    id: number,
    title: string,
    url: string
    thumbnailUrl: string
}
interface IImageDescriptionCardProps {
    data: IImageListProps,
    lastChild: boolean
}
const ImageDescriptionCard: FC<IImageDescriptionCardProps> = ({ data, lastChild }) => {
    return (
        <View className='min-w-[244px] min-h-[300px] max-w-[244px] max-h-[300px]  rounded-sm bg-white '>
            <Image source={{ uri: data.url }} className='h-[130px]' resizeMode='cover'
                defaultSource={require('../../assets/images/fallbackImage.png')} />
            <View className={`border-l-2 border-b-2 border-gray-200 w-full h-[170px] ${lastChild ? 'border-r-2' : ''}`}>
                <View className='flex-col gap-5 p-4 '>
                    <Text className='font-interSans font-700 text-base'>{data.title}</Text>
                    <Text>{data.title}</Text>
                </View>
            </View>

        </View>
    )
}

export default ImageDescriptionCard
