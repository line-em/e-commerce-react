import Nav from "./components/Nav";
import HeroFeature from "./components/HeroFeature";
import BookCard from "./components/BookCard";
import { books } from "./data/historicalMysteriesBooks";
import "./Helpers/css-reset.css";

function App() {
	const renderFeatureBooks = books.map((book) => <BookCard key={book.id} {...book} />);

	return (
		<>
			<Nav />
			<main>
				<section className="main-wrapper">
					<HeroFeature />
					<section className="featured-items">{renderFeatureBooks}</section>
				</section>
			</main>
		</>
	);
}

export default App;
