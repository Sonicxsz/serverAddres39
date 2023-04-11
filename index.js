const express = require('express');
const cors = require('cors');
const { images } = require('./gallery');
const { items } = require('./items');

const app = express();
app.use(cors());
const port = 3001;

app.get('/', (req, res) => {
  res.send(images);
});

app.get('/api/v1/items', (req, res) => {
    const newItems = JSON.stringify(items)
    res.send(newItems);
  });

app.listen(port, () => {
  console.log('server is running');
});

