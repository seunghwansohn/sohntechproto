const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const proxy = require('http-proxy-middleware');

app.use(bodyParser.json());   //자동으로 json 형식으로 변환하여 통신하도록 함.
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
  
connection.connect();

app.get('/api/customers', (req, res) => {
  connection.query(
    'SELECT * FROM itemList',
    (err, rows, fields) => {
    res.send(rows);
    }
  )
});
    
app.listen(port, () => console.log(`Listening on port ${port}`));