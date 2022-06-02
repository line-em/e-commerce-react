import React from "react";
import HeroFeature from "../components/HeroFeature";

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
					<h3 className="price">$14,99</h3>
					<div className="featured-content-price">
						<button>+</button>
						<h4>1</h4>
						<button>-</button>
						{/* FIXME: Delete button */}
					</div>
				</article>
			</section>
		</>
	);
}

export default Cart;
