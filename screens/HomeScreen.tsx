import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

export default function HomeScreen() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='flex-1 relative'>

      {/* Logo */}
      <View className='px-6 '>
        <View className='flex-row items-center'>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>
      </View>

      {/* Introduction */}
      <View className='px-6 mt-8 space-y-3'>
        <Text className='text-3xl text-dark-1'>Create memories with</Text>
        <Text className='text-primary text-4xl font-bold'>Pressed Pennies</Text>
        <Text className='text-base text-dark-2'>
          Check out your collection and map out your next adventure based on coins near your location!
        </Text>
      </View>

      {/* Decoration */}
      <View>
        <View className='bg-secondary w-[400px] h-[400px] rounded-full absolute top-26 -right-36'></View>
        <View className='bg-tertiary w-[400px] h-[400px] rounded-full absolute top-56 -right-76'></View>
      </View>

      {/* Go Button */}
      <View className='flex-1 relative items-center justify-center'>
        <View className='bottom-20 w-24 h-24 rounded-full absolute items-center justify-center border-primary border-r-2 border-l-2 border-t-4'>
          <TouchableOpacity>
            <Animatable.View
              animation={'pulse'}
              easing='ease-in-out'
              iterationCount={'infinite'}
              className='w-20 h-20 items-center justify-center rounded-full bg-primary'
            >
              <Text className='text-gray-50 text-lg font-semibold'>Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}