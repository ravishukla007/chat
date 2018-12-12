var app = require('http').createServer(handler);
var fs = require('fs');
var chat = require('rs-chat')(app);

chat.init({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

app.listen(8080);


function handler (req, res) {

  console.log('request starting...');

    var filePath = '.' + req.url;
    if (filePath == './')
        filePath = './index.html';

  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

