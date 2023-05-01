const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {mail} = require('./main');
const apiRouter = require('./controller/api')
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/v1', apiRouter)


app.post('/mail', async(req, res) => {
  const {order, type} = req.body
  return res.json({res: await mail.send(order, type)})
})  

app.listen(port, () => {
  console.log('server is running' + ' ' + port);
});



