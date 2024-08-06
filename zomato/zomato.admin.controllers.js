const Venue = require('./zomato.admin.model'); // Adjust the path as needed

// Create a new venue
exports.create = function(req, res) {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send({ error: true, message: 'Please provide all required fields' });
    }

    const newVenue = new Venue(req.body);

    Venue.create(newVenue, function(err, venueId) {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: true, message: 'Error creating venue' });
        }
        res.status(200).json({ error: false, message: "Venue added successfully!", data: { id: venueId } });
    });
};

// Add more methods for managing venues (e.g., get, update, delete) as needed

