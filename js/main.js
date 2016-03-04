function averagePrice(items) {
	var priceSum =
	items.reduce(function(totalCost, currentItem) {
		return totalCost + currentItem;
	}, 0);
		var average = priceSum / items.length;
		return average
};
var answerOne = document.querySelector(.averageCost);
answerOne.textContent= averagePrice(items);