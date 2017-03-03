var m = require("mithril");
var Product = require("../models/Product");

function n(product){
	function Image(){
		var els = [
			m("img", {src: product.ImageUrl}),
			m("a.product-bar.review.hvr-fade[target='_blank']", { href: product.OfferUrl }, "Ver Oferta")
		];

		if(product.DiscountPercentage)
			els.push(m(".banner-promocao.z-depth-2", product.discountPercentage.toFixed(2) +"%"))

		return m(".mdl-card__media",els);
	}

	function Title(){
		return m(".mdl-card__title", [
			m("a[target='_blank']", { href: product.OfferUrl },[
				m("h4.mdl-card__title-text", product.Title)
			])			
		]);
	}

	function Action(){
		var elsPrices = [];

		if(product.OriginalPrice){
			elsPrices.push(m("span.original-wrapper", m("span.original-price", product.OriginalPrice)));
		}

		if(product.DiscountPrice){
			elsPrices.push(m("span.discount-wrapper", m("span.discount-price", product.DiscountPrice)));
		}

		function Stars(){
			var stars = [];
			for(var i = 0; product.Stars && i < product.Stars.length; i++){
				var selecionada = product[i] ? ".selecionada" : "";
				stars.push(m(".avaliacao" + selecionada, m.trust("&#9733;")));
			}
			return stars;
		}

		return m("div.mdl-card__actions.mdl-card--border", 
			m(".center-align",[
				m(".description", elsPrices),
				m(".product-ratings", Stars())]
			)
		)
	}
	
	return [
		Image(),
		Title(),
		Action()
	];
}

module.exports = {
	oninit: Product.loadList,
	view: function() {
		return m(".container",
				m(".mdl-grid", Product.list.map(function(product){
					return m(".mdl-cell.mdl-cell--4-col.mdl-card.mdl-shadow--2dp",  n(product));
					// return m(".mdl-cell.mdl-cell--4-col.mdl-card.mdl-shadow--2dp", [
					// 	m(".mdl-card__media", m("img",{ src: product.ImageUrl})),
					// 	m(".mdl-card__title", [
					// 		m("h4.mdl-card__title-text", product.Title)
					// 	]),
					// 	m(".mdl-card__supporting-text", [
					// 		m("p.card-text", product.Price),
					// 	]),
					// 	m("div.mdl-card__actions.mdl-card--border",
					// 		m("a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect","Ver Oferta"))
					// ]);
				})));
	}
}

