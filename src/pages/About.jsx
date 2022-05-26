import React from "react";
import { aboutMe } from "../data/heroContent";

function About() {
	const about = aboutMe.map((text) => <HeroFeature key={text.id} {...text} />);
	return <>{about}</>;
}

export default About;
