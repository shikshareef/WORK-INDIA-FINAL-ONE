

const User = require('./zomato.model');

exports.create = function(req, res) {
    if (req.body && Object.keys(req.body).length === 0) {
        return res.status(400).send({ error: true, message: 'Please provide all required fields' });
    }
    User.create(req.body, function(err, user) {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: true, message: 'Error creating user'  , status_code : '201'});
        }
        res.status(200).json({ error: false, message: "User added successfully!", data: user });
    });
};

exports.login = function(req, res) {
    const email = req.body.email;
    const password = req.body.pass;

    if (!email || !password) {
        return res.status(400).send({ error: true, message: 'Please provide email and password' });
    }

    User.login(email, password, function(err, user) {
        if (err) {
            return res.status(500).send({ error: true, message: 'Error logging in' });
        }
        if (!user) {
            return res.status(401).send({ error: true, message: 'Invalid email or password' });
        }
        res.json({ error: false, message: "Logged in successfully!", data: user });
    });
};


