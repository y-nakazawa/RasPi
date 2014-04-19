var http = require('http');
var ip = '192.168.11.10'
http.createServer( function (req, res) {
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.end('Hello World\n');	
	}).listen(1337, ip);
console.log('Server running at ' + ip);

