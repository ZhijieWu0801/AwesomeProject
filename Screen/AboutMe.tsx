import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import Home1 from './Home1.tsx';
import About1 from './About1.tsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type StackParamList = {
  Home1: undefined,
  About1: undefined,
}
type Props = NativeStackScreenProps<StackParamList, 'About1'>;
const Tab = createBottomTabNavigator<StackParamList>();

function AboutMe({ navigation }: Props) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>About Page</Text>
      {/*<Button title="Back to Home" onPress={() => navigation.navigate('Home')} />*/}
      <View style={{flex: 1,backgroundColor:'#008C8C',height:'80%',width:'100%'}}>
          <Tab.Navigator initialRouteName="Home1">
            <Tab.Screen name="Home1" component={Home1} />
            <Tab.Screen name="About1" component={About1} />
          </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default AboutMe;
