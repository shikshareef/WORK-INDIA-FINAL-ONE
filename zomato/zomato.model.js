
var dbConn = require('./db.config');

// User object create
var User = function(user) {
    this.username = user.username;
    this.email = user.email;
    this.pass = user.pass;

};

User.create = function(newUser, result) {
    dbConn.query("INSERT INTO USER set ?", newUser, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};




User.login = function(email, password, result) {
    dbConn.query("SELECT * FROM USER WHERE email = ? AND pass = ?", [email, password], function(err, rows) {
        if (err) {
            console.error(err);
            return result(err, null);
        }
        if (rows.length > 0) {
            return result(null, rows[0]);
        } else {
            return result({ message: "Invalid email or password" }, null);
        }
    });
};




module.exports = User;
