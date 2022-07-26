const http = require('http');
const fs = require('fs');
const url = require('url');
const events = require('events');
const eventEmitter = new events.EventEmitter();




const server = http.createServer(function(req, res){
	res.writeHead(200,{'Content-type':'text/html'});

	let home = () => {
		const adr = 'http://localhost:1000/about.html'
		let q =  url.parse(adr, true);
		let filename = 'about.html';
		
		fs.readFile(filename, (err,data)=>{
			if(err)throw err;
			
			console.log(q.search);
			res.write(data);
			return res.end();
		});
	};

	let anotherFunction = () => {
		fs.readFile('mynewfile1.txt', function(err,data){
			if(err)throw err;
			res.write(data);
			return res.end();
		});

	}
			
	let addtext = () => {
		fs.appendFile("mynewfile1.txt",'new text added!', function(err,data){
			if(err)throw err;
			res.write('uploaded!');
			return res.end();
		});
		
	};



	eventEmitter.on("first", home);
	eventEmitter.on("second", anotherFunction);
	eventEmitter.on('third',addtext);

	eventEmitter.emit("third");
	
	

})

server.listen(1000, console.log('running at http://127.0.0.1:1000'));
