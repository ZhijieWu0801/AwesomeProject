import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutMe from '../Screen/AboutMe.tsx';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: AboutMe,
      options: {title: 'Welcome'},
    },
    // Profile: {
    //   screen: ProfileScreen,
    // },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
