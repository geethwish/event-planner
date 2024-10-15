import Avatar from '@/components/shared/avatar';
import ImageDescriptionCard from '@/components/shared/image-description-card';
import OrganizerCard from '@/components/shared/organizer-card';
import SectionTitle from '@/components/shared/section-title';
import { Image, StyleSheet, Platform, View, Text, FlatList } from 'react-native';

export default function HomeScreen() {
  const images = [
    {
      id: '1',
      url: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      url: 'https://picsum.photos/200/400',
    }
  ];

  const imageList = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
  ];

  const organizers = [
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      'profilePic': require('../../assets/images/avatars/user1.png'),
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Kark Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      'profilePic': require('../../assets/images/avatars/user1.png'),
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 4,
      "name": "Kark Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      'profilePic': require('../../assets/images/avatars/user1.png'),
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ];

  const renderHeader = () => (
    <View>
      <FlatList
        horizontal
        data={images.slice(0, 10)}
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
          16
        </Text>
        <Text className='text-base font-natoSan600 text-subText text-center'>
          posts
        </Text>
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