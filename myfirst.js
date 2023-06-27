var http = require("http");
var dt = require("./myfristmodule");
http
	.createServer(function (req, res) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("La fecha y hora actual es: " + dt.myDateTime());
		res.write(req.url);
		res.end(" ");
	})
	.listen(8080);
