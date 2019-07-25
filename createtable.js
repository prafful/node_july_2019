var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'dbfromnode'
    
})

connection.connect((error)=>{
    if(error){
        throw error
    }
    console.log("Connected to database!!!!")
    var createTableQuery = "create table friends4 (name varchar(65), year int(8), location varchar(65), id int(8) auto_increment, primary key(id))"
    /* create table friends (name varchar(65), 
    year int(8), location varchar(65), id int(8) 
    auto_increment, primary key(id))" */
    connection.query(createTableQuery, (error, success)=>{
        if(error)
            throw error

        console.log("Table - friends - created!!!!")    
    })
})