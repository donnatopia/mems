import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

interface CardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ icon, title, subtitle }) => {
  return (
    <View className='border-2 border-[#BAB1B1] p-3 rounded-2xl flex-row items-center space-x-4 my-2'>
      <Icon
        name={ icon }
        type='font-awesome'
        color='#BAB1B1'
      />
      <View className='flex-col'>
        <Text className='text-font-2 font-bold text-lg'>{ title }</Text>
        <Text className='text-font-2'>{ subtitle }</Text>
      </View>
    </View>
  )
}

export default Card