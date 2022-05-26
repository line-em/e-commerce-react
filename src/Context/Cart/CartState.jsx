import { userReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";

const CartState = ({ children }) => {
	const initalState = {
		cartItems: [],
		checkout: false
	};

	const [state, dispatch] = useReducer(CartReducer, initalState);

	const addToCart = (payload) => {
		dispatch({ type: "ADD_TO_CART", payload });
	};

	const increase = (payload) => {
		dispatch({ type: "INCREASE", payload });
	};

	const decrease = (payload) => {
		dispatch({ type: "DECREASE", payload });
	};

	const removeFromCart = (payload) => {
		dispatch({ type: "REMOVE_ITEM", payload });
	};

	const clearCart = () => {
		dispatch({ type: "CLEAR" });
	};

	const handleCheckout = () => {
		dispatch({ type: "CHECKOUT" });
	};

	return (
		<CartContext.Provider
			value={{
				cartItems: state.cartItems,
				showCart: state.showCart,
				addToCart,
				removeFromCart,
				increase,
				decrease,
				clearCart,
				handleCheckout,
				...state
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export default CartState;
