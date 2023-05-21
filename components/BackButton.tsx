import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        name='arrow-circle-left'
        type='font-awesome'
        color='#BAB1B1'
      />
    </TouchableOpacity>
  )
}

export default BackButton