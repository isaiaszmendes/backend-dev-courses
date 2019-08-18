import Sequelize, {ConnectionOptions, Dialect} from 'sequelize'

interface Iconfig extends ConnectionOptions {
   dialect: Dialect
}

const config: Iconfig = {
   username: 'root',
   password: '4676',
   database: 'demo',
   host: 'localhost',
   dialect: 'mysql'
}
const classSequelize: any = Sequelize
const sequelize = new classSequelize(config)

// sequelize
//   .authenticate()
//   .then()
//   .catch((err: string) => console.error('Unable to connect to the database:', err));

export default sequelize
