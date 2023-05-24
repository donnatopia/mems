import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';

type PageCarouselProps = {
  start: number;
  end: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  setEndIndex: React.Dispatch<React.SetStateAction<number>>;
  length: number;
}

const PageCarousel: React.FC<PageCarouselProps> = ({ start, end, length, setStartIndex, setEndIndex }) => {

  const displayLeftIcon = start > 1;
  const displayRightIcon = end < length;

  return (
    <View className='py-4 flex-row justify-center items-center space-x-5'>
      <View className='w-8'>
        <TouchableOpacity
          className={displayLeftIcon ? '' : 'hidden'}
          onPress={() => {
            setStartIndex(start - 5);
            setEndIndex(end - 5)
          }}
        >
          <Icon
            name='arrow-circle-left'
            type='font-awesome'
            color='#86939E'
          />
        </TouchableOpacity>
      </View>
      <Text className='text-font-3 text-center'>{ start + 1 }-{ end > length ? length : end } out of { length }</Text>
      <View className='w-8'>
        <TouchableOpacity
          className={ displayRightIcon ? '' : 'hidden'}
          onPress={() => {
            setStartIndex(start + 5);
            setEndIndex(end + 5);
          }}
        >
          <Icon
            name='arrow-circle-right'
            type='font-awesome'
            color='#86939E'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PageCarousel