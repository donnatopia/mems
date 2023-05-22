import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapHome from './screens/Map/Home';
import FindAMap from './screens/Map/FindAMap';
import SelectAMap from './screens/Map/SelectAMap';

type RootStackParamList = {
  MapHome: undefined;
  'Find a Map': undefined;
  'Select a Map': undefined;
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='MapHome'>
        <Screen name='MapHome' component={ MapHome } />
        <Screen name='Find a Map' component={ FindAMap } />
        <Screen name='Select a Map' component={ SelectAMap } />
      </Navigator>
    </NavigationContainer>
  );
}
