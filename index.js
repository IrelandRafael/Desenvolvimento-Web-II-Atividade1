var http = require('http')
var dt = require('./atividade1.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("A Data e Horario atual: " + dt.horarioData());
  res.end();
}).listen(8080);