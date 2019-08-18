import { Model, DataTypes } from 'sequelize'
import sequelize from '../database'
import Address from './Address';

class User extends Model {
  public id!: number
  public name!: string
  public password!: string 

   // timestamps!
   public readonly createdAt!: Date;
   public readonly updatedAt!: Date;
}

User.init({
  id: {
    type:  DataTypes.INTEGER.UNSIGNED, 
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
  },
  password: {
    type: DataTypes.STRING(15),
  },
  birthdate: {
    type: DataTypes.DATE,
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true
})

User.hasMany(Address);

// User.sync()
//   .then()
//   .catch((err: string) => console.log('BTW, did you enter wrong database credentials?', err))

export default User