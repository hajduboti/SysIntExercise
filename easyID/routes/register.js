const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./db/data.db");


module.exports = (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let values = [email, password]
    var sQuery = `INSERT INTO users(user_email, user_password) VALUES(?, ?)`
    db.run(sQuery, values, function(err) {
        if (err) {
          return res.status(400).send("Bad request")
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.rowId}`);
      });
      // close the database connection
    return res.status(200).send({"response": "user created", "response_code": 200})
}