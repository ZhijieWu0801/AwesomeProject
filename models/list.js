// models/User.js
import { ObjectSchema } from 'realm';

const ListSchema = {
  name: 'List',
  primaryKey: 'id',
  properties: {
    id: 'int',    // 整数类型的主键
    state: 'bool',//是否完成
    value: 'string',
  },

};

export default ListSchema;
