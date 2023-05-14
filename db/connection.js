require('dotenv').config()
const mySql=require('mysql')

const connection=mySql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:'1234',
    database:process.env.DATABASE,

})

module.exports=connection;  