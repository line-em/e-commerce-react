import Nav from "./components/Nav";
import HeroFeature from "./components/HeroFeature";
import BookCard from "./components/BookCard";
import { books } from "./data/historicalMysteriesBooks";
import { featureText } from "./data/heroContent";
import "./Helpers/css-reset.css";

function App() {
	const featureHero = featureText.map((text) => <HeroFeature key={text.id} {...text} />);
	const featureBooks = books.map((book) => <BookCard key={book.id} {...book} />);

	// const featureHero = featureText.map((text) => <HeroFeature key={text.title} {...text} />);

	return (
		<>
			<Nav />
			<main>
				<section className="main-wrapper">{featureHero}</section>
				<section className="featured-items">{featureBooks}</section>
				<footer>
					<p>&copy; {new Date().getFullYear()} Bookstore. All rights reserved.</p>
				</footer>
			</main>
		</>
	);
}

export default App;
