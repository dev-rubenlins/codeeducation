const util = require('util')
const express = require('express')
//const bodyParser = require("body-parser");
const app = express()
//const router = express.Router();
const mysql = require('mysql')
var os = require('os');

const port = 3000

//Configuring express to use body-parser as middle-ware.
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Creating database connection
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const connection = mysql.createConnection(config)

app.all('/', (req, res) => {
  console.log('Method: ' + req.method)
	if (req.method === 'GET') {
    
    connection.query('SELECT * FROM people', function(err, rows, fields){
        if (err) throw err;
        var output = '<h1>Full Cycle Rocks!</h1>'.concat(os.EOL)
        output = output.concat('<ul>').concat(os.EOL)
        console.log('records: ' + rows.length)
        for (var i = 0; i < rows.length; i++) {
         /*  var queryResult = JSON.stringify(rows)
          console.log('queryResult:'+queryResult)
          var json = JSON.parse(queryResult)     
          console.log('json:' + json)   
          console.log('json[0].name:' + json[0].name)   
          output = output + '<li>' + json[0].name + '</li>' + os.EOL */
          output = output + '<li>' + rows[i].name + '</li>' + os.EOL
        }        
        console.log('output:' + output)
        output = output.concat('</ul>')
        res.send(output)
    })
    
	} else if (req.method === 'POST') {    
    console.log('POST: ')
    console.log('body: ',  req.body)
    console.log('sql')
    const sql = util.format('INSERT INTO people(name) values("%s")', req.body.name)
    console.log(sql)
    connection.query(sql, function(err, result){
      if (err) res.send(err.code + ': ' + err.message);
      res.send("1 record inserted");        
    })    
  }
});

 
app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
});