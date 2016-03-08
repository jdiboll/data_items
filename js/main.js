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


 	
	//var oak = items.materials.split(',')
	function madeOfWood(lists) {
		return lists.indexOf("wood") >= 0;
	}

	//This above gets down to the array of materials, 
	//something I had tried to abrr. below.
	 var woodItems = items.filter(function(product) {//
	   return product.materials.indexOf('wood') >=0;
  		});
	 //notice the use of the bullshit name, "product"
	 //the indexOf function is plugged in here, it doesn't need a return
	  var pine = 
	  woodItems.map(function(product) {
	  	return product.title + " is made of wood ";
	  });
	  	//notice again the name "product", it contined use for clarity
	  	//and it's purpose.

	  var answerFour = document.querySelector(".wood");
	  answerFour.innerHTML = pine.join('<br><br>');



	  var soMuchMat = 
	  items.filter(function(product) {
		return product.materials.length > 7;
		});
		// same as earlier problem- filter to the desired array.
		var data = soMuchMat.map(function(product) {
			return {
			name: product.title,
			materialsCount: product.materials.length,
			materials: product.materials
		}
		});
		
		//mapping out the info we want for our answer...
		var displayMess = data.map(function(datum) {
			var firstLine = datum.name + " has " + datum.materialsCount + " materials ";
			var materialList = datum.materials.join('<br>');
			var message = firstLine + '<br><br>' + materialList;
			return message;
		});
	  	

	  	var answer5 = document.querySelector('.Answer5');
	  	answer5.innerHTML = displayMess.join('<br><br>');

	  //again, focus on the steps needed to solve the problem and what tool
	  //works for each. Must get used to thinking this way.

	  	var selfMade =
	  	items.filter(function(product) {
	  		return product.who_made.indexOf('i_did') >= 0;
	  	});
	  	var selfCount = selfMade.reduce(function(memo, person){
	  		return memo + person.who_made.split(',').length
	  		
	  		},0);
	  		console.log (selfCount);

	  	var Answer6 = document.querySelector('.madeIt');
	  	Answer6.innerHTML = selfCount;

