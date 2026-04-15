import React, { useState } from 'react';
import { Button, StyleSheet, Text, Switch, TextInput, View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import realm from '../storage/realm';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
type ListItem = {
  id: number;
  value: string;
  state: boolean;
}
function Home({ navigation }: Props) {
  const [name, setName] = useState('');
  const [list, setList] = useState<ListItem[]>([])
  const handleChange = (text: string) => {
    setName(text);
  }
  // 新增一条前端数据
  const addLine = ()=>{
    const allLine = realm.objects('List')
    if(!name) return
    realm.write(() => {
      realm.create('List', {
        id: (allLine.length || 0) + 1,
        state: false,
        value: name,
      })
      setName('')
      getList()
    })
  }
  // 获取数据从数据库
  const getList = ()=>{
    const allLine = realm.objects('List');
      setList(JSON.parse(JSON.stringify(allLine)) || [])

  }
  // 开关的变化事件
  const handCheckValueChange = (e:boolean,item:ListItem)=>{
    const newList = list.map((i:ListItem)=>{
      if(i.id === item.id){
        i.state = e
      }
      return i
    })
    setList(newList)
  }
  // 同步新增数据到数据库
  const updateDB = ()=>{
    realm.write(() => {
      list.forEach(i=>{
        realm.create('List', {
          id: i.id,
          state: i.state,
          value: i.value,
        },true)
      })
    })
  }
  const handleOldChange = (item:ListItem,text:string)=>{
    item.value = text
    setList([...list])
  }
  //删除按钮点击事件
  const handleDelete = (item:ListItem)=>{
    const List = realm.objects('List');
    realm.write(() => {
      // 根据 id 查找对应的 Realm 对象
      const itemToDelete =  List.filtered(`id == ${item.id}`)[0];
      if (itemToDelete) {
        realm.delete(itemToDelete);
      }
    })
    getList()
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
            {list.map((item, index) => (
              <View key={index} style={styles.ListContainer}>
                  <Switch value={item.state} onValueChange={(e)=>{
                    handCheckValueChange(e,item)
                  }}/>
                  <TextInput onChangeText={(text)=>handleOldChange(item,text)} style={styles.Input} value={item.value}/>
                  <Button title='删除' onPress={()=>handleDelete(item)}/>
              </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
           <TextInput onChangeText={handleChange} value={name} style={styles.newInput} />
        <View style={styles.ButtonContainer}>
          <Button onPress={addLine} title='添加' />
          <Button onPress={getList} title='获取' />
          <Button onPress={updateDB} title='更新数据库' />
          {/*<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />*/}
          {/*<Button title="Go to About" onPress={() => navigation.navigate('About')} />*/}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  ListContainer:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
  },
  Input:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    flex: 1,
  },
  newInput:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    width: 250,
  },
  ButtonContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  bottomContainer:{
    marginTop:10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  Button:{
    width: 120,
    height: 40,
  }
});

export default Home;
