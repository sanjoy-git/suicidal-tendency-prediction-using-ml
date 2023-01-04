const mysql = require('mysql');
  const dbConnectionConfig={
    host:"localhost",
    user:"root",
    password:"",
    database:"predictusedb"
  
  }
  const connection = mysql.createConnection(dbConnectionConfig);
  connection.connect((err)=>{
    if(err){
      console.error(err);
    }
    else{
      console.log("Database connected");
    }
  });

module.exports=connection;