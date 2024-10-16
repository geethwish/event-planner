import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Avatar from '@/components/shared/avatar'
import CategoryTabItem, { ItemData } from '@/components/shared/category-tab-item'
import { postCategories } from '@/constants/post-categories'
import PostCard from '@/components/shared/post-card'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

const Posts = () => {
    const profile = useSelector((state: RootState) => state.auth.user);
    const [selectedId, setSelectedId] = React.useState<string | null>('all');
    const posts = useSelector((state: RootState) => state.posts.posts);

    return (
        <SafeAreaView className="bg-white h-full box-border">
            <ScrollView>
                <View className='p-4 border-b-2 border-[#E1E2E4]'>
                    <View className='flex-row items-center'>
                        <Avatar source={{ uri: profile ? profile.profilePicture : '@/assets/images/avatars/user1.png' }} classNames='w-[44px] h-[44px] mr-2' />
                        <Text className='font-natoSan600 text-base'>
                            Hey, {profile && profile.firstName || ''}
                        </Text>
                    </View>

                </View>
                <View className='p-4'>
                    <Text className='font-interSans font-400 text-2xl'>
                        Trending  <Text className='font-interSans font-700 text-2xl'>
                            Posts
                        </Text>


                    </Text>
                    <View className='max-w-full w-full mt-5'>
                        <FlatList
                            className='w-full'
                            horizontal
                            data={postCategories}
                            renderItem={({ item }) => (
                                <CategoryTabItem item={item} onPress={() => setSelectedId(item.slug)} selected={selectedId === item.slug} />
                            )}
                            keyExtractor={(item: { id: any }) => item.id}
                            extraData={selectedId}
                        />
                    </View>

                </View>

                <View className='p-4 flex-col' style={{ rowGap: 20 }}>
                    {
                        posts !== null && posts.map((post, index) => (
                            <PostCard data={post} key={index} />
                        ))
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Posts

const styles = StyleSheet.create({})