const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./db/data.db");
const jwt = require('jsonwebtoken')


module.exports = (req, res) => {
  let email = req.body.email
  let password = req.body.password
  let values = [email, password]
  console.log(values)
  var sQuery = `SELECT * FROM users where user_email= ? and user_password= ?`
  db.get(sQuery, values, function(err, row) {
    if (err) {
      return res.status(400).send("Bad request")
    }
    if(row){
        const token = jwt.sign({
            'email': email,
            }, 'secret')
        return res.status(200).send(token)
    }
    return res.status(400).send("Bad request")
  });
}