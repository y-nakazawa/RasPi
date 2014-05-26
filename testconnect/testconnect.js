var connect = require('connect');
connect.createServer(
//	connect.static('/home/pi/work/raspi');
	connect.static(__dirname)
).listen(1337);