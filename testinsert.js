var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306
    
})

connection.connect((error)=>{
    if(error)
        throw error

    console.log("Connected to MYSQL Database!!!!")
    //create database
    var createDbQuery = "create database dbfromnode"
    connection.query(createDbQuery, (error, success)=>{
        if(error)
            throw error
        
        console.log("Database created!!!!")    
    })
    
})
