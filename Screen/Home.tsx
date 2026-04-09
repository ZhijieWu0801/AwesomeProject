import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Home!</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Home;
