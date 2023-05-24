import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import BackButton from '../../components/BackButton';
import FilterCollected from '../../components/Map/FilterCollected';
import PlaceCard from '../../components/Map/PlaceCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { CompassIcon, ToBeSelectedIcon } from '../../components/Map/Legend';
import { mapLocations } from '../../data';

type Props = NativeStackScreenProps<RootStackParamList, 'Select a Map'>

const SelectAMap = ({ route, navigation }: Props) => {
  const { title, maps, places } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
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
        { mapLocations.map((mapLocation) => (
          <PlaceCard
            key={ mapLocation.title }
            leftIcon={<CompassIcon />}
            rightIcon={<ToBeSelectedIcon />}
            title={ mapLocation.title }
            subtitle={ `${mapLocation.places} places` }
            onPress={() => navigation.navigate('About a Map', {
              title: mapLocation.title,
              places: mapLocation.places
            })}
            rightIconOnPress={() => navigation.navigate('Map Home')}
          />
        )) }
        {/* create carousel to change pages */}
      </View>
    </SafeAreaView>
  )
}

export default SelectAMap