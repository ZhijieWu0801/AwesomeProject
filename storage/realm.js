// realm.js
import Realm from 'realm';
import ListSchema from '../models/list';

// 定义所有数据模型
const schemas = [ListSchema];

// 初始化 Realm 实例
const realm = new Realm({
  schema: schemas,
  schemaVersion: 1, // 初始版本号
});

export default realm;
