
function myDisplayer(value){
	console.log(value);
}
const promise =  new Promise(function(resolve, reject){
	let x = 20;
	if(x === 10){
		resolve("true");
	}
	else{
		reject("False");
	}
})


promise.then(
	function(success){myDisplayer(success);},
	function(error){myDisplayer(error)}
	)