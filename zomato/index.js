const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =  5000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});
const userRoutes = require('./zomato.routes')
app.use('/api/v1/users', userRoutes)
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});