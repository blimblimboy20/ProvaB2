import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPage from './src/pages/ForgotPage';
import registerPage from './src/pages/registerPage';
import DashBoardPage from './src/pages/DashBoardPage';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage}/>
      <Stack.Screen name="ForgotPage" component={ForgotPage}/>
      <Stack.Screen name="registerPage" component={registerPage}/>
      <Stack.Screen name="DashBoardPage" component={DashBoardPage}/>


    </Stack.Navigator>
   </NavigationContainer>

  );
}


