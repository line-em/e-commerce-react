import HeroFeature from "../components/HeroFeature";
import { ItemDetails } from "../components/ItemDetails";

function Cart() {
	return (
		<>
			<section className="hero-wrapper">
				<HeroFeature
					title="Cart"
					blurb={
						<div className="featured-content-price">
							<h3>Total: 15,99</h3>
							<h3>Quantity: 3</h3>
						</div>
					}
				/>{" "}
			</section>
			<section className="cart-items">
				<article className="featured-content">
					<div className="featured-book-cover">
						{/* <img src={props.image} alt={props.title} /> */}
						<img
							src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639377419l/58275730.jpg"
							alt=""
						/>
					</div>
					<div className="featured-content-info">
						<h3>Woman on Fire</h3>
					</div>
					<hr />

					<div className="featured-content-price">
						<h3 className="price">$14,99</h3>
						<ItemDetails />
					</div>
				</article>
			</section>
		</>
	);
}

export default Cart;
