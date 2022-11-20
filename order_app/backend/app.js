const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3005;

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send('Hello from server!');
});

// add routes for /products and /orders
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));