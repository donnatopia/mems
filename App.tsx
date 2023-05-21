import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapHome from './screens/Map/Home';

type RootStackParamList = {
  MapHome: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='MapHome'>
        <Screen name='MapHome' component={ MapHome } />
      </Navigator>
    </NavigationContainer>
  );
}
