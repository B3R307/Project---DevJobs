const devConfig = {
  client: 'pg',
  connection : {
    host: '127.0.0.1',
    port: '5432',
    user: 'dba_devjobs',
    password: 'passpass',
    database : 'devjobs'
  },

  migrations: {
    directory: './src/database/migrations'
  },

  seeds : {
    directory: './src/database/seeds'
  }

}


const productionConfig = Object.assign(
  {},
  devConfig,
  { connection: process.env.DATABASE_URL}
)

module.exports = process.env.NODE_ENV === 'production' ?
  productionConfig :
  devConfig


// module.exports = {
//   development: devConfig,
//   prodution:{}
// }
