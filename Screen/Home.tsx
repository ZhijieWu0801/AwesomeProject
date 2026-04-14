import React, { useState } from 'react';
import { Button, StyleSheet,  TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import realm from '../storage/realm';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({ navigation }: Props) {
  const [name, setName] = useState('');
  const handleChange = (text: string) => {
    setName(text);
    const line = realm.objects('List').filter((obj)=>obj.id === 0)[0]
    // console.log(text,line);
    if(line){
      realm.write(() => {
        line.state = !line.state
        line.value = text
      })
    } else {
      realm.write(() => {
        realm.create('List', {
          id: 0,
          state: false,
          value: text,
        })
      })
    }
  }
  const getName = async () => {
    // setName(await AsyncStorage.getItem('name'));
    const line = realm.objects('List').filter((obj)=>obj.id === 0)[0]
    console.log({ ...line });
    setName(line.value)
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput onChangeText={handleChange} value={name} />
        {/*<Button onPress={() => AsyncStorage.setItem('name', name)} title='添加'></Button>*/}
        <Button onPress={getName} title='获取'></Button>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to About" onPress={() => navigation.navigate('About')} />
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
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Home;
