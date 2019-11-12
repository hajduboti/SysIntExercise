const express = require('express');
const app = express()

const jwt = require('jsonwebtoken')

// DB imports
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./db/data.db");
//db.run("CREATE TABLE IF NOT EXISTS users(user_email TEXT,user_password PASSWORD)")

//###################################################

app.get( '/balance/:token', (req, res) => {
    let token = req.params.token
    let decoded= jwt.decode(token)
    let email = decoded.email
    return res.status(200).send(email)
})

app.listen( 8081, (err) => {
    if(err){ console.log(err) }
    console.log('Server listenning')
})