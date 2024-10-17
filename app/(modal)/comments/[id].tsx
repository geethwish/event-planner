import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommentsCard, { IComments } from '@/components/shared/comments-card'
import api from '@/config/axios-config'
import { useLocalSearchParams } from 'expo-router'

const comments = () => {
    const { id } = useLocalSearchParams();
    const [commentsList, setCommentsList] = useState<IComments[]>([])

    // Fetch comments
    const fetchCommentsList = async () => {

        try {
            const comments = (await api.get('/comments')).data

            // Filter comments by postId
            const selectedComments = comments.filter((comment: IComments) => comment.postId === parseInt(id as string))

            setCommentsList(selectedComments)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCommentsList()
    }, [])

    return (

        <SafeAreaView className='bg-white h-full'>

            <View className='flex-col'>

                <View className='flex-row  w-full border-b-2 border-gray-200'>
                    <View className='items-center justify-center w-full p-4'>
                        <Text className='font-interSans text-xl font-600 text-formFieldText'>Comments</Text>
                    </View>

                </View>
                <FlatList
                    data={commentsList}
                    renderItem={({ item }) => <CommentsCard data={item} />}
                    keyExtractor={item => item.id.toString()}
                />

            </View>

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </SafeAreaView>

    )
}

export default comments

const styles = StyleSheet.create({})