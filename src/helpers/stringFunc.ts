export function numberTOuid(inputString:number,targetLength:number){
	let newString = String(inputString);
	while(newString.length<targetLength){
		newString = '0' + newString;
	}
	return newString;
}
