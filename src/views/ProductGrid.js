var m = require("mithril");
var Product = require("../models/Product");

module.exports = {
	oninit: Product.loadList,
	view: function() {
		return m(".container",
				m(".row", Product.list.map(function(product){
					return m(".col-lg-4",
							m(".card", [
								m(".view.overlay.hm-white-slight", [
									m("img",{ src:product.ImageUrl }),
									m("a",{ href:"#!" }, m(".mask", {}))
								]),
								m(".card-block", [
									m("h4.card-title", product.Title),
									m("p.card-text", product.Price),
									m(".read-more", m("a.btn.btn-brown",{ href:"#!" },"Read more"))
								])
							]));
				})));
	}
}