const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getPromotion(categories){
	const uniqueCategories = [...new Set(categories)];
	return promotions[uniqueCategories.length - 1] || promotions.slice(-1);
}
function reduceList (valueList, listEntry = null){
	const total = valueList
		.reduce((acc, curr) => {
			const value = curr[listEntry] || curr;
			acc += parseFloat(value)
			return acc;
		}, 0)
		.toFixed(2);
	return total;
}
function getShoppingCart(ids, productsList) {
	const shoppingCart = productsList.filter(({id}) => ids.includes(id));
	const products = shoppingCart.map(({ name, category }) => ({name, category}));
	const categories = shoppingCart.map(({category}) => category);
	const promotion = getPromotion(categories);
	const promotionPrices = shoppingCart.map(({promotions, regularPrice}) => {
		const price = promotions.reduce((acc, curr) => {
			if(curr.looks.includes(promotion)){
				acc = curr.price;
			}
			return acc;
		}, regularPrice);
		return price;
	});
	const totalRegularPrice = reduceList(shoppingCart, 'regularPrice');
	// const totalPrice = reduceList(promotionPrices);
	// const discountValue = reduceList([totalRegularPrice, -totalPrice]);
	// const discount = reduceList([discountValue/totalRegularPrice * 100]) + '%';
	
	const totals = {
		totalPrice: reduceList(promotionPrices);
		discountValue: reduceList([totalRegularPrice, -this.totalPrice]);
		discount: reduceList([this.discountValue/totalRegularPrice * 100]) + '%';
	}
	return {
		products,
		promotion,
		// totalPrice,
		// discountValue,
		// discount
		...totals
	};
}

module.exports = { getShoppingCart };