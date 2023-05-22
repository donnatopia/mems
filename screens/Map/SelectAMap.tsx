import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import BackButton from '../../components/BackButton';
import FilterCollected from '../../components/Map/FilterCollected';
import PlaceCard from '../../components/Map/PlaceCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList>

const SelectAMap = ({navigation}: Props) => {

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
        <Text className='text-3xl text-theme-2 font-extrabold text-center'>United States</Text>
        <View className='flex-row justify-center space-x-4'>
          <Text className='text-lg text-font-3 text-center'>52 Maps</Text>
          <Text className='text-lg text-font-3 text-center font-bold'>|</Text>
          <Text className='text-lg text-font-3 text-center'>101234 Places</Text>
        </View>
      </View>
      <View className='py-3 w-4/5 mx-auto'>
        <FilterCollected />
      </View>
      <View className='px-4 py-2 flex-col space-y-2'>
        <PlaceCard
          leftIcon='compass'
          rightIcon='arrow-circle-right'
          title='California'
          subtitle='234 Places'
          onPress={() => navigation.navigate('About a Map')}
        />
        <PlaceCard
          leftIcon='compass'
          rightIcon='bookmark-o'
          title='Oregon'
          subtitle='234 Places'
          onPress={() => navigation.navigate('Map Home')}
        />
        <PlaceCard
          leftIcon='compass'
          rightIcon='bookmark-o'
          title='Washington'
          subtitle='234 Places'
          onPress={() => navigation.navigate('Map Home')}
        />
        <PlaceCard
          leftIcon='compass'
          rightIcon='bookmark-o'
          title='Texas'
          subtitle='234 Places'
          onPress={() => navigation.navigate('Map Home')}
        />
        <PlaceCard
          leftIcon='compass'
          rightIcon='bookmark-o'
          title='Florida'
          subtitle='234 Places'
          onPress={() => navigation.navigate('Map Home')}
        />
        {/* create carousel to change pages */}
      </View>
    </SafeAreaView>
  )
}

export default SelectAMap