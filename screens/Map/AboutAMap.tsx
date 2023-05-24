import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import BackButton from '../../components/BackButton'
import FilterCollected from '../../components/Map/FilterCollected'
import PlaceCard from '../../components/Map/PlaceCard'
import { CollectedIcon, LocationIcon, NotCollectedIcon, OutOfOrderIcon } from '../../components/Map/Legend'
import { locationsInCA } from '../../data'

type Props = NativeStackScreenProps<RootStackParamList, 'About a Map'>

const AboutAMap = ({route, navigation}: Props) => {

  const { title, places } = route.params;

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
      <View className='px-4 py-2 flex-col space-y-2'>
        { locationsInCA.map((location) => (
          <PlaceCard
            leftIcon={<LocationIcon />}
            rightIcon={ Status(location.status) }
            title={ location.title }
            subtitle={ location.city }
            onPress={() => navigation.navigate('About a Location')}
          />
        ))}
        {/* create carousel to change pages */}
      </View>
    </SafeAreaView>
  )
}

export default AboutAMap