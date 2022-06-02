import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function BookCard(props) {
	const renderTags = props.tags.map((tag) => (
		<>
			<span key={`${tag}+${props.id}`} className="tag">
				{tag}
			</span>
		</>
	));

	const { addToCart, increase, cartItems, sumItems, itemCount } = useContext(CartContext);

	const isInCart = cartItems.find((item) => item.id === props.id);

	return (
		<article className="featured-content">
			<div className="taglist widescreen">{renderTags}</div>
			<div className="featured-book-cover">
				<img src={props.image} alt={props.title} />
			</div>

			<div className="featured-content-info">
				<h3>{props.title}</h3>
				<h4>{props.author}</h4>
				{props.award && <b>{props.award}</b>}
				<p>{props.description}</p>
				<a href={props.info} target="_blank" rel="noopener noreferrer">
					[Read More...]
				</a>
			</div>

			<hr />
			<div className="smallscreen taglist">{renderTags}</div>
			<div className="featured-content-price">
				<h3 className="price">{props.price}</h3>
				<button onClick={() => addToCart(props)}>Add to Cart</button>
				{/* FIXME: Add conditional, if it's in cart, delete/increase/decrease */}
			</div>
		</article>
	);
}

export default BookCard;
