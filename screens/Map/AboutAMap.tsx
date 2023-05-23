import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import BackButton from '../../components/BackButton'
import FilterCollected from '../../components/Map/FilterCollected'
import PlaceCard from '../../components/Map/PlaceCard'
import { CollectedIcon, LocationIcon, NotCollectedIcon, OutOfOrderIcon } from '../../components/Map/Legend'

type Props = NativeStackScreenProps<RootStackParamList>

const AboutAMap = ({navigation}: Props) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-dark'>
      <View className='pt-2'>
        <BackButton  />
      </View>
      <View className='pt-3'>
        <Text className='text-3xl text-theme-2 font-extrabold text-center'>California</Text>
        <Text className='text-lg text-font-3 text-center'>256 Places</Text>
      </View>
      <View className='py-3 w-4/5 mx-auto'>
        <FilterCollected />
      </View>
      <View className='px-4 py-2 flex-col space-y-2'>
        <PlaceCard
          leftIcon={<LocationIcon />}
          rightIcon={<CollectedIcon />}
          title='Oakland Museum'
          subtitle='234 Places'
          onPress={() => navigation.navigate('About a Location')}
        />
        <PlaceCard
          leftIcon={<LocationIcon />}
          rightIcon={<NotCollectedIcon />}
          title='Children Fairyland'
          subtitle='234 Places'
          onPress={() => navigation.navigate('About a Location')}
        />
        <PlaceCard
          leftIcon={<LocationIcon />}
          rightIcon={<OutOfOrderIcon />}
          title='USS Hornet '
          subtitle='234 Places'
          onPress={() => navigation.navigate('About a Location')}
        />
        <PlaceCard
          leftIcon={<LocationIcon />}
          rightIcon={<NotCollectedIcon />}
          title='Lake Merritt'
          subtitle='234 Places'
          onPress={() => navigation.navigate('About a Location')}
        />
        <PlaceCard
          leftIcon={<LocationIcon />}
          rightIcon={<CollectedIcon />}
          title='Fruitvale'
          subtitle='234 Places'
          onPress={() => navigation.navigate('About a Location')}
        />
        {/* create carousel to change pages */}
      </View>
    </SafeAreaView>
  )
}

export default AboutAMap