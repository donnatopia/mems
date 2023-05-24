import { View } from 'react-native'
import React from 'react'
import Button from './Button';
import { useMapFilter } from '../../contexts/FilterCollected';

const FilterCollected = () => {
  const { selected, setSelected, filterOptions } = useMapFilter();

  return (
    <View className='flex-row justify-evenly'>
      {
        filterOptions.map((filter, index) => (
          <Button
            key={`button-${index}`}
            onPress={() => setSelected(index)}
            text={filter}
            variety={index === selected ? 'primary' : 'secondary'}
            size='sm'
          />
        ))
      }
    </View>
  )
}

export default FilterCollected