// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function countChar(string) {
	// body...
	var arr = string.split('')

	//make initial zero array with same lenght
	var zeros = Array.from(arr)
	for (var i = 0; i < zeros.length; i++) {
		zeros[i] = 0
	}
//compare the value if existed increment zero array
	for (var i = 0; i < arr.length; i++) {
		for (var j = i; j < arr.length; j++) {
			if(arr[i] === arr[j]){
				zeros[j]++
			}
		}
	}
	return zeros.join('')
}