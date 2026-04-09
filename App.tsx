import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from './Screen/Home';
import AboutMe from './Screen/AboutMe';
import { Button, View } from 'react-native';

export type RootStackParamList = {
  App:undefined;
  Home: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
type Props = NativeStackScreenProps<RootStackParamList, 'App'>;

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={AboutMe} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
