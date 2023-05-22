import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';

interface GuideCardProps {
  title: string;
  maps: number;
  places: number;
}

const GuideCard: React.FC<GuideCardProps> = ({ title, maps, places }) => {
  const navigation = useNavigation();

  return (
    <View className='mb-4'>
      <TouchableOpacity
        className='border-2 border-font-2 p-2 rounded-2xl w-44'
        onPress={() => navigation.navigate('Select a Map')}
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