import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type Props = NativeStackScreenProps<RootStackParamList>

const Home = ({navigation}: Props) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home