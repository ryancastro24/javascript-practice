const events = require('events');
const fs = require('fs');
const rs = fs.createReadStream('./about.html');
const eventEmitter = new events.EventEmitter();

const myEventHandler = () => {
	console.log("about html is opened");
	return rs;
};

const myOtherEventHandler = () =>{
	console.log('another event is running');
};



const myEvent = "expose";

eventEmitter.on('expose', myEventHandler);
eventEmitter.on('exposed', myOtherEventHandler);

eventEmitter.emit(myEvent);


