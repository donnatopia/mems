import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactElement } from 'react'

interface CardProps {
  leftIcon: ReactElement;
  rightIcon: ReactElement;
  title: string;
  subtitle: string;
  onPress?: () => void;
  rightIconOnPress?: () => void;
}

const Card: React.FC<CardProps> = ({ leftIcon, rightIcon, title, subtitle, onPress, rightIconOnPress }) => {
  return (
    <TouchableOpacity className='my-2 border-2 border-[#BAB1B1] p-3 rounded-2xl flex-row items-center justify-between' onPress={onPress}>
      <View className='flex-row items-center space-x-4'>
        { leftIcon }
        <View className='flex-col'>
          <Text className='text-font-2 font-bold text-lg'>{ title }</Text>
          <Text className='text-font-2'>{ subtitle }</Text>
        </View>
      </View>
      { rightIconOnPress ? <TouchableOpacity onPress={rightIconOnPress}>{rightIcon}</TouchableOpacity> : <View>{rightIcon}</View>}
    </TouchableOpacity>
  )
}

export default Card