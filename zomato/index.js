const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Import and use user routes
const userRoutes = require('./zomato.routes');
app.use('/api/v1/users', userRoutes);

// Import and use venue routes
const venueRoutes = require('./zomato.admin.routes'); // Adjust the path as needed
app.use('/api/v1/venues', venueRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
