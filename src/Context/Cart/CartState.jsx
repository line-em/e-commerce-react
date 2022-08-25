import { useReducer } from "react";
// import CartContext from "./CartContext";
// import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";
import { createContext } from "react";
import { useState } from "react";
import { goodReadsBooks } from "../../data/goodReads";
import { featureBooks } from "../../data/historicalMysteriesBooks";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [itemsInCart, setItemsInCart] = useState([]);
	const allItems = goodReadsBooks.concat(featureBooks);

	const addToCart = (currentBook) => {
		setItemsInCart(allItems.map((book) => {}));
	};
	const removeFromCart = "oi";
	const increaseItem = "oi";
	const decreaseItem = "oi";
	const checkout = "oi";

	const totalPrice = "oi";

	// const initalState = {
	// 	cartItems: [],
	// 	checkout: false
	// };

	// const [state, dispatch] = useReducer(CartReducer, initalState);

	// const addToCart = (payload) => {
	// 	dispatch({ type: "ADD_TO_CART", payload });
	// };

	// const increase = (payload) => {
	// 	dispatch({ type: "INCREASE", payload });
	// };

	// const decrease = (payload) => {
	// 	dispatch({ type: "DECREASE", payload });
	// };

	// const removeFromCart = (payload) => {
	// 	dispatch({ type: "REMOVE_ITEM", payload });
	// };

	// const clearCart = () => {
	// 	dispatch({ type: "CLEAR" });
	// };

	// const handleCheckout = () => {
	// 	dispatch({ type: "CHECKOUT" });
	// };

	return (
		<CartContext.Provider
			value={{
				addToCart
				// cartItems: state.cartItems,
				// showCart: state.showCart,
				// addToCart,
				// removeFromCart,
				// increase,
				// decrease,
				// clearCart,
				// handleCheckout,
				// ...state
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export { CartContext, CartContextProvider };
