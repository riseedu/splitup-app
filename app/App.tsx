import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#000000' }, // black header
    headerTintColor: '#FFD700', // gold text/icons
    headerTitleStyle: { fontWeight: '600' },
  }}
>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="About" component={AboutScreen} />
</Stack.Navigator>
    </NavigationContainer>
  );
}