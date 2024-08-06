var dbConn = require('./db.config');

// Venue object create
const adminKey = "WorkIndia";

var Venue = function(place) {
    this.name = place.name;
    this.address = place.address;
    this.phone_no = place.phone_no;
    this.website = place.website;
}

Venue.create = function(newVenue, result) {
    dbConn.query("INSERT INTO venue SET ?", newVenue, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

// Export the Venue object
module.exports = Venue;
