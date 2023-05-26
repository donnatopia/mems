import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import BackButton from '../../components/BackButton';
import Search from '../../components/Search';
import GuideCard from '../../components/Map/GuideCard';
import { get } from '../../utilities/axios';
import { GuideProps, NavigationProps } from '../../types';
import { useMapFilter } from '../../contexts/FilterCollected';
import FilterCollected from '../../components/Map/FilterCollected';

const FindAMap = ({navigation}: NavigationProps) => {
  const { getNumOfSelectedPlaces } = useMapFilter();
  const [input, setInput] = useState('');
  const [guides, setGuides] = useState([] as GuideProps[]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  useEffect(() => {
    get('/api/guides')
      .then(({ data }) => setGuides(data))
      .catch(err => console.log('error loading guides', err));
  }, []);

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
      <FilterCollected />
      <View className='px-4 pt-6'>
        <Text className='text-2xl text-theme-1 font-bold'>Guides</Text>
      </View>
      <View className='px-4 pt-3 flex-row justify-between flex-wrap'>
        {
          guides.map((guide) => {
            const places = getNumOfSelectedPlaces(guide.places_collected, guide.places_not_collected);

            return (
              <GuideCard
                key={ guide.guide_id }
                title={ guide.title }
                maps={ guide.maps }
                places={ places }
                onPress={() => navigation.navigate('Select a Map', {
                  guide_id: guide.guide_id,
                  title: guide.title,
                  maps: guide.maps,
                  places_collected: guide.places_collected,
                  places_not_collected: guide.places_not_collected
                })}
              />
            )
          })
        }
      </View>
    </SafeAreaView>
  )
}

export default FindAMap