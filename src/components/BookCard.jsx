import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemDetails } from "./ItemDetails";
// import { CartContext } from "../Context/CartState";

function BookCard(props) {
	const renderTags = props.tags.map((tag) => (
		<span key={`${tag}+${props.id}`} className="tag">
			{tag}
		</span>
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
				<h3 className="price">$ {props.price}</h3>
				<ItemDetails />
			</div>
		</article>
	);
}

export default BookCard;
