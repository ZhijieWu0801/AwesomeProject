import React, {Component} from "react";
import {StyleSheet, Text, ToastAndroid, TouchableHighlight, View,} from 'react-native';
import {
    HistoryTableName,
    CityTableName,
    clearAllFromRealm,
    queryAllFromRealm,
    writeToRealm,
    clearRowFromRealm
} from "./RealmUtil";

export default class TestRealm extends Component {
    componentWillMount() {
    }

    //表1操作
    _addData() {
        clearAllFromRealm(HistoryTableName);

        let row1 = {"id": 1, "name": "战狼1"};
        writeToRealm(row1, HistoryTableName).then(() => {
            ToastAndroid.show('写入完成1', ToastAndroid.SHORT);
        });
        let row2 = {"id": 2, "name": "战狼2"};
        writeToRealm(row2, HistoryTableName).then(() => {
            ToastAndroid.show('写入完成2', ToastAndroid.SHORT);
        });
    }

    _readAllData() {
        queryAllFromRealm(HistoryTableName).then((list) => {
            for (let key in list) {
                ToastAndroid.show('id:' + list[key].id + ',name:' + list[key].name, ToastAndroid.SHORT);
            }
        });
    }

    _updateData() {
        let row2 = {"id": 2, "name": "北京222"};
        writeToRealm(row2, HistoryTableName).then(() => {
            ToastAndroid.show('修改完成', ToastAndroid.SHORT);
        });
    }

    _delRowData() {
        //删除第一行
        clearRowFromRealm(1, HistoryTableName).then(() => {
            ToastAndroid.show('删除完成', ToastAndroid.SHORT);
        });
    }

    //表2操作
    _addData2() {
        clearAllFromRealm(CityTableName);

        let row1 = {"city_id": 1, "city_name": "上海"};
        writeToRealm(row1, CityTableName).then(() => {
            ToastAndroid.show('2写入完成1', ToastAndroid.SHORT);
        });
        let row2 = {"city_id": 2, "city_name": "北京"};
        writeToRealm(row2, CityTableName).then(() => {
            ToastAndroid.show('2写入完成2', ToastAndroid.SHORT);
        });
    }

    _readAllData2() {
        queryAllFromRealm(CityTableName).then((list) => {
            for (let key in list) {
                ToastAndroid.show('城市ID:' + list[key].city_id + ',城市名:' + list[key].city_name, ToastAndroid.SHORT);
            }
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{padding: 10}}><Text>表1操作</Text></View>
                <TouchableHighlight onPress={() => this._delRowData()} style={styles.button} underlayColor="#a5a5a5">
                    <Text>删除第一行</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._addData()} style={styles.button} underlayColor="#a5a5a5">
                    <Text>增加数据</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._updateData()} style={styles.button} underlayColor="#a5a5a5">
                    <Text>修改数据</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._readAllData()} style={styles.button} underlayColor="#a5a5a5">
                    <Text>读取全部数据</Text>
                </TouchableHighlight>

                <View style={{padding: 10, marginTop: 10}}><Text>表2操作</Text></View>
                <TouchableHighlight onPress={() => this._addData2()} style={styles.button} underlayColor="#a5a5a5">
                    <Text>增加数据</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._readAllData2()} style={styles.button} underlayColor="#a5a5a5">
                    <Text>读取全部数据</Text>
                </TouchableHighlight>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    button: {
        margin: 3,
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd'
    },
});
