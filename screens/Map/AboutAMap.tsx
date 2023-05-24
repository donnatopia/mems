import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import BackButton from '../../components/BackButton'
import FilterCollected from '../../components/Map/FilterCollected'
import PlaceCard from '../../components/Map/PlaceCard'
import { CollectedIcon, LocationIcon, NotCollectedIcon, OutOfOrderIcon } from '../../components/Map/Legend'
import { locationsInCA, locationsInFL, locationsInOR, locationsInTX, locationsInWA } from '../../data'
import { AboutALocationProps } from '../../App'
import PageCarousel from '../../components/PageCarousel'

type Props = NativeStackScreenProps<RootStackParamList, 'About a Map'>

const AboutAMap = ({route, navigation}: Props) => {

  const { title, places } = route.params;
  const [locations, setLocations] = useState<AboutALocationProps[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  useEffect(() => {
    if (title === 'California') {
      setLocations(locationsInCA);
    } else if (title === 'Florida') {
      setLocations(locationsInFL);
    } else if (title === 'Texas') {
      setLocations(locationsInTX);
    } else if (title === 'Oregon') {
      setLocations(locationsInOR);
    } else if (title === 'Washington') {
      setLocations(locationsInWA);
    }
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const Status = (status: number) => {
    if (status === 0) {
      return (<NotCollectedIcon />)
    } else if (status === 1) {
      return (<CollectedIcon />)
    } else {
      return (<OutOfOrderIcon />)
    }
  }

  return (
    <SafeAreaView className='flex-1 bg-dark'>
      <View className='pt-2'>
        <BackButton  />
      </View>
      <View className='pt-3'>
        <Text className='text-3xl text-theme-2 font-extrabold text-center'>{ title }</Text>
        <Text className='text-lg text-font-3 text-center'>{ places } Places</Text>
      </View>
      <View className='py-3 w-4/5 mx-auto'>
        <FilterCollected />
      </View>
      <View className='px-4 py-2 flex-col space-y-2 h-[56vh]'>
        { locations.slice(startIndex, endIndex).map((location) => (
          <PlaceCard
            key={ location.title }
            leftIcon={<LocationIcon />}
            rightIcon={ Status(location.status) }
            title={ location.title }
            subtitle={ location.city }
            onPress={() => navigation.navigate('About a Location', {
              title: location.title,
              status: location.status,
              address: location.address,
              city: location.city,
              state: location.state,
              zip: location.zip,
              website: location.website,
              designs: location.designs,
              notes: location.notes
            })}
          />
        ))}
      </View>
      <PageCarousel
        start={ startIndex }
        end={ endIndex }
        setStartIndex={setStartIndex}
        setEndIndex={setEndIndex}
        length={ locations.length }
      />
    </SafeAreaView>
  )
}

export default AboutAMap