const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {mail} = require('./main');
const { images } = require('./gallery');
const { items } = require('./items');
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/api/v1/images', (req, res) => {
  res.send(images);
});

app.get('/api/v1/items', (req, res) => {
    const newItems = JSON.stringify(items)
    res.send(newItems);
  });

app.post('/mail', async(req, res) => {
  const {order, type} = req.body
  console.log(res.json({res: await mail.send(order, type)}))
  return 
})  

app.listen(port, () => {
  console.log('server is running' + ' ' + port);
});

