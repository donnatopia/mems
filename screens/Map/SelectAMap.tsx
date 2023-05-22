import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../../components/BackButton';
import FilterCollected from '../../components/Map/FilterCollected';
import Card from '../../components/Map/Card';

const SelectAMap = () => {
  const navigation = useNavigation();

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
      <View className='px-4 py-2 flex-col space-y-2 overflow-y-scroll'>
        <Card icon='compass' title='California' subtitle='234 Places'/>
        <Card icon='compass' title='California' subtitle='234 Places'/>
        <Card icon='compass' title='California' subtitle='234 Places'/>
        <Card icon='compass' title='California' subtitle='234 Places'/>
        <Card icon='compass' title='California' subtitle='234 Places'/>

        {/* create carousel to change pages */}
      </View>
    </SafeAreaView>
  )
}

export default SelectAMap