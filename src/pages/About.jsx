import React from "react";
import HeroFeature from "../components/HeroFeature";
import { aboutMe } from "../data/heroContent";

function About() {
	const about = aboutMe.map((text) => <HeroFeature key={text.id} {...text} />);
	return (
		<section className="hero-wrapper">
			{about}
			<hr />
		</section>
	);
}

export default About;
