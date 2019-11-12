const express = require('express');
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json())

// DB imports
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./db/data.db");
//db.run("CREATE TABLE IF NOT EXISTS users(user_email TEXT,user_password PASSWORD)")

// ROUTES
const route_register = require('./routes/register')
const route_login = require('./routes/login')


//###################################################

app.post( '/register', route_register)
app.post( '/gettoken', route_login)


app.listen( 8080, (err) => {
    if(err){ console.log(err) }
    console.log('Server listenning')
})