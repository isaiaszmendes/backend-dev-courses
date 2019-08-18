import { Model, DataTypes } from 'sequelize'
import sequelize from '../database'

class Address extends Model {}

Address.init({
  id: {
    type:  DataTypes.INTEGER.UNSIGNED, 
    autoIncrement: true,
    primaryKey: true,
  },
  cep: {
     type: DataTypes.STRING
   },
   logradouro: {
     type: DataTypes.STRING
   },
   num: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Address',
  tableName: 'address',
})

// Address.sync()
//    .then()
//    .catch((err: string) => console.log('BTW, did you enter wrong database credentials?', err))


export default Address