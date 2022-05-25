import React from "react";
import { BookOpen } from "phosphor-react";
import { blogContent } from "../data/historicalMysteriesBooks";

function HeroFeature() {
	return (
		<header className="main-title">
			<div className="flex">
				<BookOpen weight="duotone" color="var(--white)" size={48} />
				<h1>bookstore</h1>
				<p>Spreading the love of books.</p>
			</div>
			<hr />
			<h2>{blogContent[0].title}</h2>
			<p>{blogContent[0].blurb}</p>
			<a href={blogContent[0].url} target="_blank" rel="noopener noreferrer">
				[Read More...]
			</a>
		</header>
	);
}
export default HeroFeature;
