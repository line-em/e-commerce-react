import { React, useState } from "react";
import { MoonStars, Sun, BookOpen, ShoppingCart } from "phosphor-react";

function Nav() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", theme);
		document.querySelector("html").setAttribute("data-theme", theme);
	};

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

			<div className="theme-button" onClick={toggleTheme}>
				{theme === "light" ? (
					<Sun size={20} weight="duotone" />
				) : (
					<MoonStars size={20} weight="duotone" />
				)}
			</div>

			<nav>
				<div className="nav-brand">
					<BookOpen
						weight="duotone"
						color={theme === "light" ? "var(--white)" : "var(--teal)"}
					/>
					Bookstore
				</div>

				<ul className="nav-links">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
				<div className="nav-cart">
					<ShoppingCart
						weight="duotone"
						size={24}
						color={theme === "light" ? "var(--white)" : "var(--teal)"}
					/>
					<a href="#">$100.00</a>
				</div>
			</nav>
		</>
	);
}

export default Nav;
