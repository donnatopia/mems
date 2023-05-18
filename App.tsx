import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Collection from './screens/Collection';
import { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen name='Home' component={ HomeScreen } />
        <Screen name='Collection' component={ Collection } />
      </Navigator>
    </NavigationContainer>
  );
}
