import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Button from './Button';

const FilterCollected = () => {
  const buttons = ['All', 'Collected', 'Not Collected'];
  const [selected, setSelected] = useState(0);

  return (
    <View className='flex-row justify-evenly'>
      {
        buttons.map((button, index) => (
          <Button
            key={`button-${index}`}
            onPress={() => setSelected(index)}
            text={button}
            variety={index === selected ? 'primary' : 'secondary'}
            size='sm'
          />
        ))
      }
    </View>
  )
}

export default FilterCollected