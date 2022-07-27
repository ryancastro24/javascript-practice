const http = require('http');
const fs = require('fs');
const url = require('url');







const server = http.createServer(function(req, res){
	res.writeHead(200,{'Content-type':'text/html'});
	const link = url.parse(req.url, true);
	const mylink = `.${link.pathname}`;

	
		
		fs.readFile(mylink, (err,data)=>{
			if(err){
				res.write(`<h1>404 ERROR! ${mylink.slice(2,)} file not found!</h1>`);
				return res.end();
			}
			res.write(data)
			return res.end();
		});

	
	
	
})

server.listen(1000, console.log('running at http://127.0.0.1:1000'));
