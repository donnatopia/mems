import { Text, SafeAreaView, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PlaceCard from '../../components/Map/PlaceCard';
import Button from '../../components/Map/Button';
import FilterCollected from '../../components/Map/FilterCollected';
import { RootStackParamList } from '../../App';
import { CompassIcon, SelectedIcon, ToBeSelectedIcon } from '../../components/Map/Legend';

type Props = NativeStackScreenProps<RootStackParamList, 'Map Home'>;

export default function Home({navigation}: Props) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='flex-1 relative bg-dark'>

      {/* Logo */}
      <View className='px-6 pt-3'>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 115, height: 115 }}
        />
      </View>

      {/* Heading */}
      <View className='py-8 pl-20 flex-col'>
        <Text className='text-2xl text-font-1 font-bold'>Find</Text>
        <Text className='text-3xl text-theme-1 font-extrabold'>Collectible</Text>
        <Text className='text-3xl text-theme-2 font-extrabold'>Pressed Pennies</Text>
        <Text className='text-2xl text-font-1 font-bold'>in...</Text>
      </View>

      {/* Selected Place */}
      <View className='px-8 flex-col'>
        <PlaceCard
          leftIcon={<CompassIcon />}
          rightIcon={<SelectedIcon />}
          title='California'
          subtitle='123 Places'
        />
      </View>

      {/* Collect Filter */}
      <View className='px-8 pt-3 pb-10'>
        <FilterCollected />
      </View>

      {/* Buttons */}
      <View className='px-8'>
        <Button
          onPress={() => navigation.navigate('Map')}
          text='Show Map'
          variety='primary'
        />
      </View>

      <View className='px-8 py-3'>
        <Button
          onPress={() => navigation.navigate('Find a Map')}
          text='Find a Map'
          variety='secondary'
        />
      </View>

    </SafeAreaView>
  )
}