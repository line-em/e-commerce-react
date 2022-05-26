import { ADD_TO_CART, INCREASE, DECREASE, REMOVE_ITEM, CLEAR, CHECKOUT } from "./CartTypes";

export const sumItems = (cartItems) => {
	Storage(cartItems);
	return cartItems.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);
};
