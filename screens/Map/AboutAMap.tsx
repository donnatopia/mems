import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import BackButton from '../../components/BackButton'
import FilterCollected from '../../components/Map/FilterCollected'
import PlaceCard from '../../components/Map/PlaceCard'

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
          leftIcon='thumb-tack'
          rightIcon='arrow-circle-right'
          title='Oakland Museum'
          subtitle='234 Places'
        />
        <PlaceCard
          leftIcon='thumb-tack'
          rightIcon='arrow-circle-right'
          title='Children Fairyland'
          subtitle='234 Places'
        />
        <PlaceCard
          leftIcon='thumb-tack'
          rightIcon='arrow-circle-right'
          title='USS Hornet '
          subtitle='234 Places'
        />
        <PlaceCard
          leftIcon='thumb-tack'
          rightIcon='arrow-circle-right'
          title='Lake Merritt'
          subtitle='234 Places'
        />
        <PlaceCard
          leftIcon='thumb-tack'
          rightIcon='arrow-circle-right'
          title='Fruitvale'
          subtitle='234 Places'
        />
        {/* create carousel to change pages */}
      </View>
    </SafeAreaView>
  )
}

export default AboutAMap