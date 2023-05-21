import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../../components/BackButton';
import Search from '../../components/Search';

const FindAMap = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-dark'>
      <View className='pt-2'>
        <BackButton/>
      </View>
      <View className='pt-3'>
        <Text className='text-3xl text-theme-2 font-extrabold text-center'>Find a Map</Text>
      </View>
      <View className='px-4 py-6'>
        <Search input={input} setInput={setInput}/>
      </View>
      <View className='px-4 pt-6'>
        <Text className='text-2xl text-theme-1 font-bold'>Guides</Text>
      </View>
      <View>

      </View>
    </SafeAreaView>
  )
}

export default FindAMap