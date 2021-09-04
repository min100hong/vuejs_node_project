const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const router = express.Router();
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));


app.route('/status').get(function(req, res) {
  res.send({
    message: 'Hello world',
  });
});

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Express Server Started !!!');
});