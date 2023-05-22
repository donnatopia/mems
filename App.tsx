import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapHome from './screens/Map/Home';
import FindAMap from './screens/Map/FindAMap';
import SelectAMap from './screens/Map/SelectAMap';
import Map from './screens/Map/Map';

export type RootStackParamList = {
  'Map Home': undefined;
  'Map': undefined;
  'Find a Map': undefined;
  'Select a Map': undefined;
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
      </Navigator>
    </NavigationContainer>
  );
}
