import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

interface CardProps {
  leftIcon: string;
  rightIcon: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ leftIcon, rightIcon, title, subtitle, onPress }) => {
  return (
    <TouchableOpacity className='my-2 border-2 border-[#BAB1B1] p-3 rounded-2xl flex-row items-center justify-between' onPress={onPress}>
      <View className='flex-row items-center space-x-4'>
        <Icon
          name={ leftIcon }
          type='font-awesome'
          color='#BAB1B1'
        />
        <View className='flex-col'>
          <Text className='text-font-2 font-bold text-lg'>{ title }</Text>
          <Text className='text-font-2'>{ subtitle }</Text>
        </View>
      </View>
      <View>
        <Icon
          name={ rightIcon }
          type='font-awesome'
          color='#BAB1B1'
        />
      </View>
    </TouchableOpacity>
  )
}

export default Card