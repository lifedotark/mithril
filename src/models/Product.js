var Product = {
	list: [],
	loadList: function () {
		var r = function(){
			return +(Math.random() * 100).toFixed();
		}

		for (var i = 1; i <= 1000; i++) {

			// var width = r();
			// var height = (3*width/4).toFixed();

			var width = i < 100 ? 100: i;
			var height = i < 100 ? 100: i;

			Product.list.push({
				Title: "Product " + i,
				Price: (Math.random() * i).toFixed(2),
				// ImageUrl: `http://lorempixel.com/${width}/${height}/`
				ImageUrl: `https://www.placecage.com/400/400`
			});
		}
	}
}

module.exports = Product;