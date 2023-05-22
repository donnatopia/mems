import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import BackButton from '../../components/BackButton';
import Search from '../../components/Search';
import GuideCard from '../../components/Map/GuideCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList>

const FindAMap = ({navigation}: Props) => {
  const [input, setInput] = useState('');
  const guides = [
    {
      title: 'All Maps',
      maps: 88,
      places: 12447
    },
    {
      title: 'Favorites',
      maps: 5,
      places: 3123
    },
    {
      title: 'United States',
      maps: 52,
      places: 10658
    },
    {
      title: 'International',
      maps: 36,
      places: 1789
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-dark'>
      <View className='pt-2'>
        <BackButton/>
      </View>
      <View className='pt-3'>
        <Text className='text-3xl text-theme-2 font-extrabold text-center'>Find a Map</Text>
      </View>
      <View className='px-4 py-6'>
        <Search input={input} setInput={setInput}/>
      </View>
      <View className='px-4 pt-6'>
        <Text className='text-2xl text-theme-1 font-bold'>Guides</Text>
      </View>
      <View className='px-4 pt-3 flex-row justify-between flex-wrap'>
        {
          guides.map((guide, index) => (
            <GuideCard
              key={`guide-${index}`}
              title={ guide.title }
              maps={ guide.maps }
              places={ guide.places }
            />
          ))
        }
      </View>
    </SafeAreaView>
  )
}

export default FindAMap