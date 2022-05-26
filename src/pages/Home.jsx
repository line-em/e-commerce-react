import HeroFeature from "../components/HeroFeature";
import BookCard from "../components/BookCard";
import { BookOpen } from "phosphor-react";
import { featureBooks } from "../data/historicalMysteriesBooks";
import { featureText, goodReadsText } from "../data/heroContent";
import { goodReadsBooks } from "../data/goodReads";

function Home() {
	const featureHero = featureText.map((text) => <HeroFeature key={text.id} {...text} />);
	const featureCards = featureBooks.map((book) => <BookCard key={book.id} {...book} />);

	const goodReadsHero = goodReadsText.map((text) => <HeroFeature key={text.id} {...text} />);
	const goodReadsCards = goodReadsBooks.map((book) => <BookCard key={book.id} {...book} />);

	return (
		<>
			<section className="hero-wrapper">
				<div className="flex hero-content">
					<BookOpen weight="duotone" color="var(--white)" size={48} />
					<h1>bookstore</h1>
					<p>Spreading the love of books.</p>
				</div>
				<hr />
				{featureHero}
			</section>
			<section className="featured-items">{featureCards}</section>
			<section className="hero-wrapper">{goodReadsHero}</section>
			<section className="featured-items">{goodReadsCards}</section>
			<footer>
				<p>&copy; {new Date().getFullYear()} Bookstore. All rights reserved.</p>
			</footer>
		</>
	);
}

export default Home;
