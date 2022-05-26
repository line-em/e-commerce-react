import React from "react";
import { BookOpen } from "phosphor-react";

function HeroFeature(props) {
	return (
		<header className="main-title">
			<div className="flex">
				<BookOpen weight="duotone" color="var(--white)" size={48} />
				<h1>bookstore</h1>
				<p>Spreading the love of books.</p>
			</div>
			<hr />
			<h2>{props.title}</h2>
			<p>{props.blurb}</p>
			<a href={props.url} target="_blank" rel="noopener noreferrer">
				[Read More...]
			</a>
		</header>
	);
}
export default HeroFeature;
