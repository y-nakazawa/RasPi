var ws = require('websocket.io');	// websocket.ioを使用

var server = ws.listen(8888, function () {
	console.log('Start Websocket Server!');
});

server.on('connection', function (socket) {
	socket.on('message', function (data) {
		console.log('Receive: ' + data);
	});
});

