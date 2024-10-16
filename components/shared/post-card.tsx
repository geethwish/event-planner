import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './avatar'
import IconButton from './icon-button'
import icons from '@/constants/icons'
import LikeIcon from '../icons/like-icon'
import { Colors } from '@/constants/Colors'
import CommentsIcon from '../icons/comments'
import ActionIcon from '../icons/action'

const PostCard = () => {
    return (
        <View className='flex-col w-full shadow-2xl bg-white rounded-b-2xl'>
            <Image source={{ uri: 'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png' }} resizeMode='cover' className='w-full h-[230px] rounded-t-2xl' />
            <View className='p-4'>
                <View className='flex-row items-center'>
                    <Avatar source={require('../../assets/images/avatars/user1.png')} classNames='w-6 h-6' />
                    <Text className='ml-2 text-sm font-natoSan400 text-subText'>Joan Westernburg</Text>
                </View>

                <View>
                    <Text className='font-interSans font-600 text-lg text-formFieldText mt-3'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </Text>
                    <Text className='font-natoSan400 text-base text-subText text-ellipsis' numberOfLines={2} ellipsizeMode='tail'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sunt deleniti eum dolorum quis! Veritatis perspiciatis sed nisi recusandae provident atque reprehenderit quisquam alias in. Voluptatibus eum in quo iusto.
                    </Text>
                </View>

                <View className='flex-row items-center justify-between mt-3'>
                    <View className='w-[50%] flex-row  justify-between'>
                        <Text className='font-natoSan400 text-base text-subText'>Jul 27</Text>
                        <View className='flex-row items-center'>
                            <LikeIcon width='20' height='20' fill={Colors.light.subText} />
                            <Text className='font-natoSan400 text-base text-subText'> 3.2k</Text>
                        </View>

                        <View className='flex-row items-center'>
                            <CommentsIcon width='20' height='20' fill={Colors.light.subText} />
                            <Text className='font-natoSan400 text-base text-subText'>12</Text>
                        </View>

                    </View>
                    <IconButton>
                        <ActionIcon width='20' height='20' fill={Colors.light.subText} />
                    </IconButton>
                </View>
            </View>

        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({})