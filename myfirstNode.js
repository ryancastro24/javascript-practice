const url = require('url');
const http = require('http');
const fs = require('fs');
const uc = require('upper-case');
const events = require('events');
const eventEmitter = new events.EventEmitter();


const server = http.createServer(function(req,res){
	res.writeHead(404,{'Content-type': 'text/html'});
	const firstEvent = () => {
		let q = url.parse(req.url, true);
	let filename = "." + '/about.html';

	fs.readFile(filename,function(err,data){

		if(err){
			
			return res.end('404 not found');
		}
			
		res.write(data);
		res.write(uc.upperCase('hello world'));
		return res.end();

	});
	};

	const secondEvent = () => {
	
		res.write('this is the second content');
		return res.end();
	}	


	eventEmitter.on('first',firstEvent);
	eventEmitter.on('second',secondEvent);


	eventEmitter.emit('second');


	
	

	
});

server.listen(3000,console.log('running at http://127.0.0.1.3000'));