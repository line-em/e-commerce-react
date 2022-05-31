import React from "react";
import HeroFeature from "../components/HeroFeature";
import { aboutMe } from "../data/heroContent";

function About() {
	const about = aboutMe.map((text) => <HeroFeature key={text.id} {...text} />);
	return (
		<section className="hero-wrapper">
			{about}
			<hr />
			<section className="hero-content">
				<h2>About Line</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id suscipit
					voluptatem nulla, ad, sit fuga ab adipisci quos doloribus, in nobis excepturi
					harum rem perspiciatis doloremque sapiente officia rerum.
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id suscipit
					voluptatem nulla, ad, sit fuga ab adipisci quos doloribus, in nobis excepturi
					harum rem perspiciatis doloremque sapiente officia rerum.
				</p>
			</section>
		</section>
	);
}

export default About;
