// import { ADD_TO_CART, INCREASE, DECREASE, REMOVE_ITEM, CLEAR, CHECKOUT } from "./CartTypes";

export const sumItems = (cartItems) => {
	Storage(cartItems);
	let itemCount = cartItems.reduce((total, product) => total + product.count, 0);
	let total = cartItems.reduce((total, product) => total + product.price * product.count, 0);
	return { itemCount, total };
};

const CartReducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			if (!state.cartItems.find((item) => item.id === action.payload.id)) {
				state.cartItems.push({ ...action.payload, quantity: 1 });
			}
			return {
				...state,
				...sumItems(state.cartItems),
				cartItems: [...state.cartItems, action.payload]
			};
		case INCREASE:
			state.cartItems[state.cartItems.findIndex((item) => item.id === action.payload)]
				.quantity++;
			return {
				...state,
				...sumItems(state.cartItems),
				cartItems: [...state.cartItems]
			};
		case DECREASE:
			state.cartItems[state.cartItems.findIndex((item) => item.id === action.payload)]
				.quantity--;
			return {
				...state,
				...sumItems(state.cartItems),
				cartItems: [...state.cartItems]
			};
		case REMOVE_ITEM:
			return {
				...state,
				...sumItems(state.cartItems.filter((item) => item.id !== action.payload.id)),
				cartItems: [...state.cartItems.filter((item) => item.id !== action.payload.id)]
			};
		case CLEAR:
			return {
				cartItems: [],
				...sumItems([])
			};
		case CHECKOUT:
			return {
				cartItems: [],
				checkout: true,
				...sumItems([])
			};
		default:
			return state;
	}
};

export default CartReducer;
