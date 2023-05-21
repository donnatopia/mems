import React, { useState } from 'react'
import { SearchBarIOS } from '@rneui/base/dist/SearchBar/SearchBar-ios'

interface SearchProps {
  input: string;
  setInput: (s: string) => void;
}

const Search: React.FC<SearchProps> = ({ input, setInput }) => {
  return (
    <SearchBarIOS
      placeholder='Search...'
      searchIcon={{
        color: '#BAB1B1'
      }}
      placeholderTextColor='#BAB1B1'
      containerStyle={{
        backgroundColor: '#081D21',
      }}
      inputContainerStyle={{
        backgroundColor: '#081D21',
        borderColor: '#BAB1B1',
        borderBottomColor: '#BAB1B1',
        borderBottomWidth: 1,
        borderWidth: 1,
        borderRadius: 50
      }}
      inputStyle={{
        color: '#CCCED6'
      }}
      value={input}
      onChangeText={(search) => setInput(search)}
      cancelButtonProps={{
        color: '#BAB1B1'
      }}
    />
  )
}

export default Search