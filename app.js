const http = require('http');
const fs = require('fs');

const hostname = '192.168.1.56';

const port = 8383;

fs.readFile('index.html', (err, html) => {
	
	if(err){
		throw err;
	}

	const server = http.createServer((req,res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type' , 'text/html');
		res.write(html);
		res.end();

	});

		server.listen(port , hostname , () => {
			console.log('Server started on port '+port);

	});

});



