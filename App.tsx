import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapHome from './src/screens/Map/Home';
import FindAMap from './src/screens/Map/FindAMap';
import SelectAMap from './src/screens/Map/SelectAMap';
import Map from './src/screens/Map/Map';
import AboutAMap from './src/screens/Map/AboutAMap';
import AboutALocation from './src/screens/Map/AboutALocation';
import { useState } from 'react';
import { MapFilterContext } from './src/contexts/FilterCollected';

export type RootStackParamList = {
  'Map Home': undefined;
  'Map': undefined;
  'Find a Map': undefined;
  'Select a Map': {
    title: string,
    maps: number,
    places: number
  };
  'About a Map': {
    title: string,
    places: number,
  };
  'About a Location': AboutALocationProps;
}

export type AboutALocationProps = {
  title: string,
  status: number,
  address: string,
  city: string,
  state: string,
  zip: number | null,
  website: string,
  designs: string,
  notes: Note[];
};

export type Note = {
  date: string;
  content: string;
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  // Map Filters
  const filterOptions = [
    'All', // status: -1, 0, 1
    'Collected', // status 1
    'Not Collected' // status -1, 0
  ]
  const [selected, setSelected] = useState(0);
  const value = { selected, setSelected, filterOptions };

  return (
    <MapFilterContext.Provider value={value}>
      <NavigationContainer>
        <Navigator initialRouteName='Map Home'>
          <Screen name='Map Home' component={ MapHome } />
          <Screen name='Map' component={ Map } />
          <Screen name='Find a Map' component={ FindAMap } />
          <Screen name='Select a Map' component={ SelectAMap } />
          <Screen name='About a Map' component={ AboutAMap } />
          <Screen name='About a Location' component={AboutALocation} />
        </Navigator>
      </NavigationContainer>
    </MapFilterContext.Provider>
  );
}
