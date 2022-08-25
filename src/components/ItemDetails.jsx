import { useState } from "react";

export const ItemDetails = (props) => {
	const [inCart, setInCart] = useState(true);

	const buttonsInCart = (
		<>
			<div>
				<button className="btn btn-primary" onClick={() => setInCart((prev) => !prev)}>
					Remove
				</button>
			</div>
			<div className="flex-row">
				<button className="btn btn-slim">+</button>
				<h4>5</h4>
				<button className="btn btn-slim">-</button>
			</div>
		</>
	);

	const addToCart = (
		<button className="btn btn-primary" onClick={() => setInCart((prev) => !prev)}>
			Add to Cart
		</button>
	);

	return (
		<div className="flex flow">
			{inCart ? buttonsInCart : addToCart}
			{/* <button  className="btn btn-primary">Add to Cart</button> */}
			{/* onClick={() => addToCart(props)} */}
			{/* FIXME: Add conditional, if it's in cart, delete/increase/decrease */}
		</div>
	);
};
