import Nav from "./components/Nav";
import HeroFeature from "./components/HeroFeature";
import BookCard from "./components/BookCard";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookOpen } from "phosphor-react";
import { featureBooks } from "./data/historicalMysteriesBooks";
import { featureText, goodReadsText } from "./data/heroContent";
import { goodReadsBooks } from "./data/goodReads";
import "./Helpers/css-reset.css";

function App() {
	const featureHero = featureText.map((text) => <HeroFeature key={text.id} {...text} />);
	const featureCards = featureBooks.map((book) => <BookCard key={book.id} {...book} />);

	const goodReadsHero = goodReadsText.map((text) => <HeroFeature key={text.id} {...text} />);
	const goodReadsCards = goodReadsBooks.map((book) => <BookCard key={book.id} {...book} />);

	const progressBar = () => {
		const scroll = document.body.scrollTop || document.documentElement.scrollTop;
		const windowHeight =
			document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrolled = (scroll / windowHeight) * 100;
		document.getElementById("progress-bar").style.width = `${scrolled}%`;
	};

	window.onscroll = progressBar;

	return (
		<>
			<div className="progress-container">
				<div id="progress-bar"></div>
			</div>

			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/about" element={<About />} />
					{/* <Route path="/cart" element={<Cart />} /> */}
				</Routes>
			</BrowserRouter>
			<main>
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
			</main>
		</>
	);
}

export default App;
