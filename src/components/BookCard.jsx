import React from "react";
import { Bookmark } from "phosphor-react";

function BookCard(props) {
	const renderTags = props.tags.map((tag) => (
		<>
			<span key={tag} className="tag">
				{tag}
			</span>
		</>
	));

	return (
		<article className="featured-content">
			<div className="taglist">{renderTags}</div>
			<div className="featured-book-cover">
				<img src={props.image} alt={props.title} />
			</div>

			<div className="featured-content-info">
				<h3>{props.title}</h3>
				<h4>{props.author}</h4>
				<p>{props.description}</p>
				<a href={props.info} target="_blank" rel="noopener noreferrer">
					[Read More...]
				</a>
			</div>
			<hr />
			<div className="featured-content-price">
				<h3 className="price">{props.price}</h3>
				<button>Add to Cart</button>
			</div>
		</article>
	);
}

export default BookCard;
