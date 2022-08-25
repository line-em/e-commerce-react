import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../Context/CartContext";

function BookCard(props) {
	const renderTags = props.tags.map((tag) => (
		<>
			<span key={`${tag}+${props.id}`} className="tag">
				{tag}
			</span>
		</>
	));

	// const { addToCart, increase, cartItems, sumItems, itemCount } = useContext(CartContext);

	// const isInCart = (product) => cartItems.find((item) => item.id === props.id);

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
				<div className="flex flow">
					<div>
						<button className="btn btn-primary">Remove</button>
					</div>
					<div className="flex-row">
						<button className="btn btn-slim">+</button>
						<h4>5</h4>
						<button className="btn btn-slim">-</button>
					</div>
				</div>
				{/* <button  className="btn btn-primary">Add to Cart</button> */}
				{/* onClick={() => addToCart(props)} */}
				{/* FIXME: Add conditional, if it's in cart, delete/increase/decrease */}
			</div>
		</article>
	);
}

export default BookCard;
