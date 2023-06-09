import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from '@rneui/base'

interface GuideCardProps {
  title: string;
  maps: number;
  places: number;
  onPress: () => void;
}

const GuideCard: React.FC<GuideCardProps> = ({ title, maps, places, onPress }) => {
  return (
    <View className='mb-4 w-[44vw]'>
      <TouchableOpacity
        className='border-2 border-font-2 p-2 rounded-2xl'
        onPress={ onPress }
      >
        <Icon
          name='globe'
          type='font-awesome'
          color='#BAB1B1'
          size={50}
        />
        <Text className='text-center text-xl font-semibold text-font-2 py-2'>{title}</Text>
        <Text className='text-center text-lg text-font-3'>{maps} Maps</Text>
        <Text className='text-center text-lg text-font-3'>{places} Places</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GuideCard