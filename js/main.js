var average;

// function averagePrice(items) {
	var priceSum =
	items.reduce(function(totalCost, obj) {
		return totalCost += obj.price;
	}, 0);

	 average = priceSum / items.length;
		// return average
	// };

	// console.log(average);
var answerOne = document.querySelector(".averageCost");
answerOne.textContent= average.toFixed(2);

// console.log(average);


// function myMyArray(prices) {
// 	var prices = items.price;
// 	prices.filter(function(currentPrice){
// 		if (prices > 14 && prices < 18) {
// 			return 
// 		}
// });

var rightPrice = items.filter(function(item){
	var newArray = items.price > 14 && items.price < 18;
		 });

var newArray = 	rightPrice.map(function(price) {
	  	return price.title;
	  
	 
});
var answerTwo = document.querySelector(".fitItems");
answerTwo.textContent = newArray////
     //console.log(newArray);

// var answerTwo = document.querySelector('.fitItems');
// answerTwo.textContent = myArray(items);



	 var singleCode = items.filter(function(currentCode) {
	  	return currentCode.currency_code === "GPB";
		 
	  });
	 var theOne = singleCode.map(function(item) {
	 	return item.currency_code;
	 });
		  // console.log(oneCode);
	var answerThree = document.querySelector("gCode");
	answerThree.textContent = theOne;

// function myWood(items) {
	// materials.indexOf(wood,[0]) {
		// return materials.wood;
	// };
// };