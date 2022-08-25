import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/Cart/CartState";

export const ItemDetails = (props) => {
	const [inCart, setInCart] = useState(true);
	const { itemsInCart, manageCart, manageQntd, checkout, totalItems, totalPrice } =
		useContext(CartContext);

	// const isInCart = (product) => cartItems.find((item) => item.id === props.id);
	const buttonsInCart = (
		<>
			<div>
				<button
					className="btn btn-primary"
					onClick={() => {
						setInCart((prev) => !prev);
						manageCart(props.id, "remove");
					}}
				>
					Remove
				</button>
			</div>
			<div className="flex-row">
				<button className="btn btn-slim" onClick={() => manageQntd(props.id, "increase")}>
					+
				</button>
				<h4>{props.qntd}</h4>
				<button className="btn btn-slim" onClick={() => manageQntd(props.id, "decrease")}>
					-
				</button>
			</div>
		</>
	);

	const buttonsNotInCart = (
		<button
			className="btn btn-primary"
			onClick={() => {
				setInCart((prev) => !prev);
				manageCart(props.id, "add");
			}}
		>
			Add to Cart
		</button>
	);

	return (
		<div className="flex flow">
			{inCart ? buttonsInCart : buttonsNotInCart}
			{/* <button  className="btn btn-primary">Add to Cart</button> */}
			{/* onClick={() => addToCart(props)} */}
			{/* FIXME: Add conditional, if it's in cart, delete/increase/decrease */}
		</div>
	);
};
