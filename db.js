const  { Pool, Client } = require('pg');
require('dotenv').config()

const pool =  new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    });
pool.connect((err)=>{
  if(err){
    console.log(err)
    return;
  }
  else{
    console.log("conncet to database on database server")
  }
});
module.exports = pool;
