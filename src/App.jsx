import { useState } from "react";
import Nav from "./components/Nav";
import "./Helpers/css-reset.css";

function App() {
	return (
		<>
			<Nav />
			<main>
				<section className="main-wrapper">
					<section className="main-title">
						<h1>Welcome to Bookstore!</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<hr />
						<h2>Featured Items: Historical Mysteries</h2>
						<p>
							For the reader who enjoys a spot of amateur sleuthing, historical
							whodunits offer the particular pleasure of combining suspense with the
							peculiarities of a certain time period. Meanwhile, authors get to
							sidestep pesky plot-busting details—like, oh, say, the internet. Now
							that's a win-win all around!
						</p>
					</section>

					{/* https://www.goodreads.com/blog/show/2343-discover-timely-thrills-with-these-42-new-historical-mysteries?int=Soapbox_Signed_Out_2022_May&int_sub=Blog_2343 */}
					<div className="featured-items">
						<div className="featured-content">
							{" "}
							<div className="taglist">
								<p className="tag">NEW</p>
								<p className="tag">Editor's Choice</p>
								<p className="tag">Detective</p>
							</div>
							<div className="featured-book-cover">
								<img
									src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1652552066l/57693165._SY475_.jpg"
									alt="The Christie Affair"
								/>
							</div>
							<div className="featured-content-info">
								<h3>The Christie Affair</h3>
								<h4>Nina de Gramont</h4>
								<p>
									The Christie Affair is a historical mystery that is set in the
									early 20th century...
								</p>
								<a href="http://" target="_blank" rel="noopener noreferrer">
									[Read More...]
								</a>
							</div>
							<hr />
							<div className="featured-content-price">
								<h3 className="price">$10.00</h3>
								<button>Add to Cart</button>
							</div>
						</div>
						<div className="featured-content">
							{" "}
							<div className="taglist">
								<p className="tag">NEW</p>
								<p className="tag">Editor's Choice</p>
								<p className="tag">Detective</p>
							</div>
							<div className="featured-book-cover">
								<img
									src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626720108l/56922665.jpg"
									alt="Beauiful Little Fools"
								/>
							</div>
							<div className="featured-content-info">
								<h3>Beauiful Little Fools</h3>
								<h4>Jillian Cantor</h4>
								<p>
									Beauiful Little Fools is a historical mystery that is set in the
									early 20th century...
								</p>
								<a href="http://" target="_blank" rel="noopener noreferrer">
									[Read More...]
								</a>
							</div>
							<hr />
							<div className="featured-content-price">
								<h3 className="price">$10.00</h3>
								<button>Add to Cart</button>
							</div>
						</div>{" "}
						<div className="featured-content">
							{" "}
							<div className="taglist">
								<p className="tag">.epub</p>
								<p className="tag">Feature Sale</p>
							</div>
							<div className="featured-book-cover">
								<img
									src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639377419l/58275730.jpg"
									alt="Woman on Fire"
								/>
							</div>
							<div className="featured-content-info">
								<h3>Woman on Fire</h3>
								<h4>Lisa Barr</h4>
								<p>
									Beauiful Little Fools is a historical mystery that is set in the
									early 20th century...
								</p>
								<a href="http://" target="_blank" rel="noopener noreferrer">
									[Read More...]
								</a>
							</div>
							<hr />
							<div className="featured-content-price">
								<h3 className="price">$10.00</h3>
								<button>Add to Cart</button>
							</div>
						</div>{" "}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
