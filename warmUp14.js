/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  // first part is about fcomparing the max profit per day in all days
  var profit =[]

  for (var i = 0; i < prices.length; i++) {
  	for (var j =i; j < prices.length; j++) {	
  		profit.push(prices[j]-prices[i])

  		//console.log(prices[i],prices[j])
  	}profit.push([])
  	//console.log(prices[j],prices[j])
  }

// now we need to find the max number in the profit 
  profit =profit.flat()
  var maxProf = 0;
  for (var i = 0; i < profit.length; i++) {
  	for (var i = j; j < profit.length; j++) {
  		if(profit[0] < profit[j] ){
  			profit[0] = profit[j];
  		}
  	}  	
  }
return profit[0];

};
