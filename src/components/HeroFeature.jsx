import React from "react";

function HeroFeature(props) {
	return (
		<section className="hero-content">
			<h2>{props.title}</h2>
			<p>{props.blurb}</p>
			<a href={props.url} target="_blank" rel="noopener noreferrer">
				[Read More...]
			</a>
		</section>
	);
}
export default HeroFeature;
