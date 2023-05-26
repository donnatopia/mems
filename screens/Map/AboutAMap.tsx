import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import BackButton from '../../components/BackButton'
import FilterCollected from '../../components/Map/FilterCollected'
import PlaceCard from '../../components/Map/PlaceCard'
import { CollectedIcon, LocationIcon, NotCollectedIcon, OutOfOrderIcon } from '../../components/Map/Legend'
import PageCarousel from '../../components/PageCarousel'
import { useMapFilter } from '../../contexts/FilterCollected'
import { get } from '../../utilities/axios'
import { DetailsProps } from '../../types'

type Props = NativeStackScreenProps<RootStackParamList, 'About a Map'>

const AboutAMap = ({route, navigation}: Props) => {
  // props
  const { title, places, map_id } = route.params;
  const { selected } = useMapFilter();

  // states
  const [locations, setLocations] = useState<DetailsProps[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<DetailsProps[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  useEffect(() => {
    get(`/api/maps/${map_id}`)
      .then(({ data }) => setLocations(data))
      .catch((err) => console.log('error loading map info', err));
  }, [])

  const restartPageIndex = () => {
    setStartIndex(0);
    setEndIndex(5);
  }

  useEffect(() => {
    if (selected === 1) {
      restartPageIndex();
      setFilteredLocations(locations.filter((location) => location.status === 1));
    } else if (selected === 2) {
      restartPageIndex();
      setFilteredLocations(locations.filter((location) => location.status < 1));
    } else {
      restartPageIndex();
      setFilteredLocations(locations);
    }
  }, [locations, selected]);

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
      { filteredLocations.length > 0 ?
        (<View>
          <View className='px-4 py-2 flex-col space-y-2 h-[56vh]'>
            { filteredLocations.slice(startIndex, endIndex).map((location) => (
              <PlaceCard
                key={ location.title }
                leftIcon={<LocationIcon />}
                rightIcon={ Status(location.status) }
                title={ location.title }
                subtitle={ location.city }
                onPress={() => navigation.navigate('About a Location', {
                  place_id: location.place_id
                })}
              />
            )) }
          </View>
          <PageCarousel
            start={ startIndex }
            end={ endIndex }
            setStartIndex={setStartIndex}
            setEndIndex={setEndIndex}
            length={ filteredLocations.length }
          />
        </View>)
      : (
        <View>
          <Text className='text-lg text-font-3 text-center py-5'>No results found</Text>
        </View>
      ) }
    </SafeAreaView>
  )
}

export default AboutAMap