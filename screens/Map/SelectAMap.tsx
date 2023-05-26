import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import BackButton from '../../components/BackButton';
import FilterCollected from '../../components/Map/FilterCollected';
import PlaceCard from '../../components/Map/PlaceCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { CompassIcon, ToBeSelectedIcon } from '../../components/Map/Legend';
import PageCarousel from '../../components/PageCarousel';
import { get } from '../../utilities/axios';
import { MapProps } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Select a Map'>

const SelectAMap = ({ route, navigation }: Props) => {
  const { title, maps, places, guide_id } = route.params;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const [mapLocations, setMapLocations] = useState([] as MapProps[])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  useEffect(() => {
    get(`/api/guides/${guide_id}`)
      .then(({ data }) => setMapLocations(data))
      .catch(err => console.log('error loading maps', err));
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-dark'>
      <View className='pt-2'>
        <BackButton />
      </View>
      <View className='pt-3'>
        <Text className='text-3xl text-theme-2 font-extrabold text-center'>{ title }</Text>
        <View className='flex-row justify-center space-x-4'>
          <Text className='text-lg text-font-3 text-center'>
            { maps } Map{ maps !== 1 ? 's' : null }
          </Text>
          <Text className='text-lg text-font-3 text-center font-bold'>|</Text>
          <Text className='text-lg text-font-3 text-center'>{ places } Places</Text>
        </View>
      </View>
      <View className='py-3 w-4/5 mx-auto'>
        <FilterCollected />
      </View>
      <View className='px-4 py-2 flex-col space-y-2'>
        { mapLocations.slice(startIndex, endIndex).map((mapLocation) => (
          <PlaceCard
            key={ mapLocation.title }
            leftIcon={<CompassIcon />}
            rightIcon={<ToBeSelectedIcon />}
            title={ mapLocation.title }
            subtitle={ `${mapLocation.places_collected + mapLocation.places_not_collected} places` }
            onPress={() => navigation.navigate('About a Map', {
              map_id: mapLocation.map_id,
              title: mapLocation.title,
              places: mapLocation.places_collected + mapLocation.places_not_collected
            })}
            rightIconOnPress={() => navigation.navigate('Map Home')}
          />
        )) }
        <PageCarousel
          start={ startIndex }
          end={ endIndex }
          setStartIndex={ setStartIndex }
          setEndIndex={ setEndIndex }
          length={ mapLocations.length }
        />
      </View>
    </SafeAreaView>
  )
}

export default SelectAMap