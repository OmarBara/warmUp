// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function ballon(str) {

	var baloonArr ='ballon'.split('')
	var sort =[]
	// body...
	arr = str.match(/[baloon]/g)
	arr.sort();
	console.log('arr', arr)
	console.log(baloonArr) 
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < baloonArr.length; j++) {
				if (arr[i] ==  baloonArr[j]){
					arr.splice(i,1)
					baloonArr.splice(j,1)
					console.log(i,j)
					sort.push(i)
				}	
		}
		sort.push([])		
	}
	return sort
}