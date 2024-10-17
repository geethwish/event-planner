import ImageDescriptionCard from '@/components/shared/image-description-card';
import OrganizerCard from '@/components/shared/organizer-card';
import SectionTitle from '@/components/shared/section-title';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, View, Text, FlatList } from 'react-native';
import api from '@/config/axios-config';
import { useDispatch } from 'react-redux';
import { setPosts } from '@/store/posts-slice';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [imageList, setImageList] = useState<any[]>([]);
  const [organizers, setOrganizers] = useState<any[]>([]);
  const [postsList, setPostsList] = useState<any[]>([]);


  // Fetch users
  const fetchUsers = async () => {
    try {
      const users = (await api.get('/users')).data
      const selectedUsers = users.slice(0, 5);

      // Add profilePic property to each user
      const updatedRecords = selectedUsers.map((user: any) => ({
        ...user,
        profilePic: require('../../../assets/images/avatars/user1.png'),
      }));

      setOrganizers(updatedRecords)

    } catch (error) {
      console.log(error);

    }

  }

  // Fetch images
  const fetchImageList = async () => {
    try {
      const images = (await api.get('/photos')).data
      setImageList(images)
    } catch (error) {
      console.log(error);

    }
  }

  // Fetch posts
  const fetchPosts = async () => {
    try {
      const posts = (await api.get('/posts')).data
      setPostsList(posts)
      dispatch(setPosts(posts))
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    fetchPosts()
    fetchImageList()
    fetchUsers()
  }, [])

  const renderHeader = () => (
    <View>
      <FlatList
        horizontal
        data={imageList.slice(0, 10)}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} className="w-screen min-h-[220px] h-1/4" />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View className="px-5 py-3">
        <Text className='text-[26px] font-interSans font-600'>Explore & Unwind Retreat</Text>
        <Text className='font-natoSan400 text-subText mt-5'>56 O'Mally Road, ST LEONARDS, 2065, NSW</Text>
      </View>
      <View className='mt-8'>
        <View className="px-5 py-3 mb-2">
          <SectionTitle title="Organizers" />
        </View>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View>
      <View className='border-b-2 border-b-gray-100 mt-8'>
        <View className="px-5 py-3 mb-3">
          <SectionTitle title="Photos" link={{ text: 'All Photos', url: '/all-photos' }} />
        </View>
        <View className="pl-5 mb-5 pb-5">
          <FlatList
            horizontal
            data={imageList.slice(0, 10)}
            renderItem={({ item, index }) => (
              <ImageDescriptionCard data={item} key={index} lastChild={imageList.length - 1 === index} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
      <View className='border-b-2 border-b-gray-100 p-5'>
        <Text className='font-interSans font-600 text-primary text-[19px] text-center'>
          {postsList.length}
        </Text>
        <Link href='/posts'>
          <Text className='text-base font-natoSan600 text-subText text-center'>
            posts
          </Text>
        </Link>

      </View>
    </View>
  );

  return (
    <View className="flex box-border bg-white">
      <FlatList
        data={organizers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OrganizerCard user={item} />}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}