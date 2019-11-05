// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .


function reverseStr (str) {
var tmp ='' , result='';
//reverse all the string 
str = reverse(str)
lenght = str.length;

//reverse every word inside the string seperatly 
for (var i = 0; i < str.length; i++) {
	if( str[i] === ' ' || str[i] === str.length  ){
		result  = result + reverse(tmp)
		tmp = ''
	}
	tmp += str[i]
}
return result


}
function reverse (str) {
	var tmpSter ='';
	var counter = str.length-1
	for (var i = 0; i < str.length; i++) {
		tmpSter += str[counter]
		counter--;
	}


	return tmpSter
}