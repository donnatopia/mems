import { SafeAreaView, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'
import BackButton from '../../components/BackButton'

type Props = NativeStackScreenProps<RootStackParamList>

const Map = ({ navigation }: Props) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-dark'>
      <View className='pt-2'>
        <BackButton />
      </View>
      <View className='pt-3'>
        <Text className='text-3xl text-theme-2 font-extrabold text-center'>Map</Text>
        <Text className='text-2xl text-font-1 text-center'>Coming Soon</Text>
      </View>
    </SafeAreaView>
  )
}

export default Map