import React from "react";

function BookCard(props) {
	return (
		<div className="book-card">
			<img src={props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.author}</p>
			<p>{props.description}</p>
			<p>{props.price}</p>
		</div>
	);
}

export default BookCard;
