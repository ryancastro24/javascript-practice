
	let array = [1,3,45,12,45,10,15,4];
	let sequence  = [1,12,45,4];



function isValidSequence(arr,seq){
	arr = array;
	seq = sequence
	let arrayIdx = 0;
	let  sequenceIdx = 0;

	while(arrayIdx < arr.length && sequenceIdx < seq.length){
		if(arr[arrayIdx] === seq[sequenceIdx]){
			console.log('move!');
			sequenceIdx++;
		}
		arrayIdx++;

	}
	return sequenceIdx === seq.length;
}



isValidSequence();


/*

arrIdx = 0   	sequence = 0





 */