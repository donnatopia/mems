import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapHome from './screens/Map/Home';
import FindAMap from './screens/Map/FindAMap';
import SelectAMap from './screens/Map/SelectAMap';
import Map from './screens/Map/Map';
import AboutAMap from './screens/Map/AboutAMap';
import AboutALocation from './screens/Map/AboutALocation';

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
  'About a Location': undefined;
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
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
  );
}
