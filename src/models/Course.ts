import { Model, DataTypes } from 'sequelize'
import sequelize from '../database'

class Course extends Model {}

Course.init({
  id: {
    type:  DataTypes.INTEGER.UNSIGNED, 
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  teacher: {
    type: DataTypes.STRING
  },
}, {
  sequelize,
  modelName: 'Course',
  tableName: 'courses',
})

Course.sync()
   .then()
   .catch((err: string) => console.log('asdasdasdasdasd', err))


export default Course