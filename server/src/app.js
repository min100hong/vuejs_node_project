const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
const router = express.Router();

app.set('port', process.env.PORT || 8081);
app.use(bodyParser.urlencoded({urlencoded: false}));
app.use(bodyParser.json());
app.use(morgan('combined'));


app.route('/status').get(function(req, res) {
  res.send({
    message: 'Hello world',
  });
});

app.route('/register').post(function(req, res) {
  res.send({
    message: `환영합니다 ( ${req.body.email} )!, 로그인이 정상적으로 되었습니다.`
  });
});

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Express Server Started !!! port : ' + app.get('port'));
});
