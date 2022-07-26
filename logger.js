
const EventMitter = require('events');




class Logger extends EventMitter{
	log(message){
	console.log(message)
	this.emit('messageLogged', {name:"ryan"});
}


}



module.exports = Logger;