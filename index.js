const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Mail = require('./main');
const { images } = require('./gallery');
const { items } = require('./items');
const port = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.get('/api/v1/images', (req, res) => {
  res.send(images);
});

app.get('/api/v1/items', (req, res) => {
    const newItems = JSON.stringify(items)
    res.send(newItems);
  });

app.post('/mail', async(req, res) => {
  const {message, email} = req.body
  return res.json({res: await Mail(email, message)})
})  

app.listen(port, () => {
  console.log('server is running');
});

