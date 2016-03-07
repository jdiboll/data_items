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



		var rightPrice =
		items.filter(function(item){
		return item.price > 14 && item.price < 18;
		 });

		var newArray = 	rightPrice.map(function(price) {
	  	return price.title;
	  	});


var answerTwo = document.querySelector(".fitItems");
answerTwo.innerHTML = newArray////
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


 	
	var oak = items.materials.split(',')
	  oak.indexOf(function(material) {//
	   return material === "wood";
  		});

	  var pine = 
	  oak.map(function(item) {
	  	return item.title;
	  });
	  	//console.log (pine);

	  var answerFour = document.querySelector(".wood")
	  answerFour.innerHTML = pine



	  var soMuchMat = 
	  items.materials.split(',').filter(function(item) {
		return item.materials.length > 7;

			var layout = soMuchMat.name
			var howMany = soMuchMat.materials


	  });

	  	var answerFive = document.querySelector(".itemName");
	  	var answerFiveCount = document.querySelector(".itemNumber");
	  	var answerFiveItem = document.querySelector(".itemList");

	  	answerFive.textContent = layout;
	  	answerFiveCount.textContent = soMuchMat.materials;



	  var whoMade = 
	  items.who_made.reduce(function(memo, person) {
	  	if (who_made === "i_did") {
	  		return memo + person +1;
			} else {
			return 1;
			};
	  });

	  		var makeIt = memo;
	  	var answerSix= document.querySelector(".madeIt");
	  	answeSix.textContent = memo;


