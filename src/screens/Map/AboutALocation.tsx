import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'
import BackButton from '../../components/BackButton'
import { CollectedIcon, NotCollectedIcon, OutOfOrderIcon } from '../../components/Map/Legend'
import { Icon } from '@rneui/themed'

type Props = NativeStackScreenProps<RootStackParamList, 'About a Location'>

const AboutALocation = ({route, navigation}: Props) => {

  const { title, status, address, city, state, zip, website, designs, notes } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const StatusIcon = (status: number) => {
    if (status === 0) {
      return <NotCollectedIcon />
    } else if (status === 1) {
      return <CollectedIcon />
    } else {
      return <OutOfOrderIcon />
    }
  }

  return (
    <SafeAreaView className='flex-1 bg-dark'>
      <View className='pt-2'>
        <BackButton />
      </View>
      <View className='pt-5 px-10 flex-row justify-between items-center'>
        <View>
          <Text className={`text-2xl text-font-1 font-bold`}>{ title }</Text>
          <Text className='text-lg text-font-2'>{ city }</Text>
        </View>
        { StatusIcon(status) }
      </View>

      {/* About */}
      <View className='p-10'>

        {/* Title */}
        <View>
          <Text className='text-xl text-font-1 font-bold'>About</Text>
        </View>

        {/* Address */}
        <View className='pt-2 pl-4 flex-col space-y-2'>
          <View className='flex-row space-x-4 items-center'>
            { StatusIcon(status) }
            <Text className='text-lg text-font-2 font-semibold'>Address</Text>
          </View>
          <View className='pl-2'>
            <View className={`border-font-2 border-l-2 pl-7 py-3`}>
              <Text className='text-font-2'>{ address }</Text>
              <Text className='text-font-2'>{ city }, { state } { zip }</Text>
            </View>
          </View>
        </View>

        {/* Links */}
        <View className='pt-2 pl-4 flex-col space-y-2'>
          <View className='flex-row space-x-4 items-center'>
            { StatusIcon(status) }
            <Text className='text-lg text-font-2 font-semibold'>Links</Text>
          </View>
          <View className='pl-2'>
            <View className={`border-font-2 border-l-2 pl-7 py-3`}>
              <Text className='text-font-2'>{ website }</Text>
            </View>
          </View>
        </View>

        {/* Design */}
        <View className='pt-2 pl-4'>
          <View className='flex-row space-x-4 items-center'>
            { StatusIcon(status) }
            <Text className='text-lg text-font-2 font-semibold'>Designs:</Text>
            <Text className='text-lg text-font-2'>{ designs }</Text>
          </View>
        </View>

      </View>

      {/* About */}
      <View className='pb-10 px-10'>

        {/* Title */}
        <View>
          <Text className='text-xl text-font-1 font-bold'>Notes</Text>
        </View>

        { notes.map((note, index) => (
          <View
            key={`note-${index}`}
            className='pt-2 pl-4 flex-col space-y-2'
          >
            <View className='flex-row space-x-4 items-center'>
              { StatusIcon(status) }
              <Text className='text-lg text-font-2 font-semibold'>{ note.date }</Text>
            </View>
            <View className='pl-2'>
              <View className={`border-font-2 border-l-2 pl-7 py-3`}>
                <Text className='text-font-2'>{ note.content }</Text>
              </View>
            </View>
          </View>
        ))}

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