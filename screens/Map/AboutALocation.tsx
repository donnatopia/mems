import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import BackButton from '../../components/BackButton'
import { CollectedIcon } from '../../components/Map/Legend'
import { Icon } from '@rneui/themed'
import { Link } from '@react-navigation/native'

type Props = NativeStackScreenProps<RootStackParamList>

const AboutALocation = ({navigation}: Props) => {

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
      <View className='pt-5 px-10 flex-row justify-between items-center'>
        <View>
          <Text className='text-2xl text-legend-green font-bold'>Oakland Museum</Text>
          <Text className='text-lg text-font-2'>Oakland, CA</Text>
        </View>
        <CollectedIcon />
      </View>

      {/* About */}
      <View className='p-10'>

        {/* Title */}
        <View>
          <Text className='text-xl text-font-2 font-bold'>About</Text>
        </View>

        {/* Address */}
        <View className='pt-2 pl-4 flex-col space-y-2'>
          <View className='flex-row space-x-4 items-center'>
            <CollectedIcon />
            <Text className='text-lg text-font-2 font-semibold'>Address</Text>
          </View>
          <View className='pl-2'>
            <View className='border-legend-green border-l-2 pl-7 py-3'>
              <Text className='text-font-2'>1000 Oak St.</Text>
              <Text className='text-font-2'>Oakland, CA 94607</Text>
            </View>
          </View>
        </View>

        {/* Links */}
        <View className='pt-2 pl-4 flex-col space-y-2'>
          <View className='flex-row space-x-4 items-center'>
            <CollectedIcon />
            <Text className='text-lg text-font-2 font-semibold'>Links</Text>
          </View>
          <View className='pl-2'>
            <View className='border-legend-green border-l-2 pl-7 py-3'>
              <Text className='text-font-2'>Penny Machine Website</Text>
            </View>
          </View>
        </View>

        {/* Design */}
        <View className='pt-2 pl-4'>
          <View className='flex-row space-x-4 items-center'>
            <CollectedIcon />
            <Text className='text-lg text-font-2 font-semibold'>Designs:</Text>
            <Text className='text-lg text-font-2'>4P</Text>
          </View>
        </View>

      </View>

      {/* About */}
      <View className='pb-10 px-10'>

        {/* Title */}
        <View>
          <Text className='text-xl text-font-2 font-bold'>Notes</Text>
        </View>

        {/* Note 1 */}
        <View className='pt-2 pl-4 flex-col space-y-2'>
          <View className='flex-row space-x-4 items-center'>
            <CollectedIcon />
            <Text className='text-lg text-font-2 font-semibold'>May 15, 2023</Text>
          </View>
          <View className='pl-2'>
            <View className='border-legend-green border-l-2 pl-7 py-3'>
              <Text className='text-font-2'>Free Admission on First Fridays</Text>
            </View>
          </View>
        </View>

        {/* Note 2 */}
        <View className='pt-2 pl-4 flex-col space-y-2'>
          <View className='flex-row space-x-4 items-center'>
            <CollectedIcon />
            <Text className='text-lg text-font-2 font-semibold'>May 17, 2023</Text>
          </View>
          <View className='pl-2'>
            <View className='border-legend-green border-l-2 pl-7 py-3'>
              <Text className='text-font-2'>Collected</Text>
            </View>
          </View>
        </View>

        {/* Add a Note */}
        <View className='pt-2 pl-4 flex-row space-x-4 items-center'>
          <Icon name='plus-circle' type='font-awesome' color='#BAB1B1' />
          <Text className='text-lg text-font-2 font-semibold'>Add a Note</Text>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default AboutALocation