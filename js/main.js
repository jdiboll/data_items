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

		var rightPrice =
		items.filter(function(item){
		return item.price > 14 && item.price < 18;
		 });

		var newArray = 	rightPrice.map(function(price) {
	  	return price.title;
	  
	 
});
var answerTwo = document.querySelector(".fitItems");
answerTwo.textContent = newArray////
     //console.log(newArray);

// var answerTwo = document.querySelector('.fitItems');
// answerTwo.textContent = myArray(items);



	 var singleCode = 
	 items.filter(function(currentCode) {
	  	return currentCode.currency_code === "GBP";
		 
	  });
	 var theOne = 
	 singleCode.map(function(item) {
	return item.title
	 });
	 
	 var thePrice = 
	 singleCode.map(function(item) {
	return item.price
	 });
		   //console.log(singleCode);
	var answerThree = document.querySelector(".gCode");
	answerThree.textContent = theOne
	var answerThree = document.querySelector(".price");
	answerThree.textContent = thePrice


 	
	  var oak = 
	  items.indexOf(function(currentItem) {
	   return currentItem.materials === "wood";
  		});

	  var pine = 
	  oak.map(function(item) {
	  	return item.title;
	  });
	  

	  var answerFour = document.querySelector(".wood")
	  answerFour.innerHTML = pine



	  var soMuchMat = 
	  items.filter(function(item) {
	  	return item.materials.length > 7;

	  })










	  var selfMade =
	  items.reduce(function(memo,item) {
	  	return memo + item;
	  },0);
	  	return memo.who_made === "i_did";
	  };
	  var newMade = selfMade.length


	  console.log (newMade);

