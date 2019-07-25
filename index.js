var expressapp = require('express')
var mysql = require('mysql')
var bodyparser = require('body-parser')


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbfromnode',
    port: 3306
})

connection.connect((error) => {
    if (error)
        throw error

    console.log("Connected to dbfromnode database!!!!")
})

var app = expressapp()
app.use(bodyparser.json())

app.get("/", (req, res)=>{
    res.send("Hello from node express!")
})

app.get("/all", (request, response) => {
    //connect to db and get , all friends
    var qry = "select * from friends4"
    connection.query(qry, (error, success) => {
        if (error)
            throw error
        
        //response.send("All friends:  <br>")
        console.log(JSON.stringify(success))
        //response.json(success)
        response.send(JSON.stringify(success))
        //connection.end()
        response.end()
    })
})


app.get("/friend/:id", (request, response) => {
    console.log(request)
    console.log("Received: " + request.params.id)
    //connect to db and get all friends
    //var qry = "select * from friends"
    /* connection.query(qry, (error, success) => {
        if (error)
            throw error
        
        //response.send("All friends:  <br>")
        console.log(JSON.stringify(success))
        //response.json(success)
        response.send(JSON.stringify(success))
        //connection.end()
        response.end()
    }) */
    response.end()
})

app.post("/add", (req, res)=>{
    console.log("POST request received!!!!")
    console.log(req.body)
    console.log("Name: " + req.body.name)
    console.log("Location: " + req.body.location)
})

app.listen(1234)