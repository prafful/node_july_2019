var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'dbfromnode'

})

connection.connect((error) => {
    if (error) {
        throw error
    }
    console.log("Connected to database!!!!")

    var mutilpleInsert = "insert into friends4 (name, year, location) values ?"
    var records = [
        ['obb', 4, 'ahmedabad'],
        ['bnp', 2, 'chennai'],
        ['prd', 7, 'jodhpur']
    ]

    connection.query(mutilpleInsert, [records], (error, success)=>{
        if(error)
            throw error

        console.log(success)
        })

     var getAll = "select * from friends4"
     connection.query(getAll, (error, success)=>{
         if(error)
            throw error

         console.log(JSON.stringify(success))   
     })   
})    