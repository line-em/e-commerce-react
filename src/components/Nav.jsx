import { React, useState } from "react";
import { Link } from "react-router-dom";
import { MoonStars, Sun, BookOpen, ShoppingCart, GithubLogo } from "phosphor-react";

function Nav() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", theme);
		document.querySelector("html").setAttribute("data-theme", theme);
	};
	return (
		<>
			<div className="theme-button" onClick={toggleTheme}>
				{theme === "light" ? (
					<Sun size={20} weight="duotone" />
				) : (
					<MoonStars size={20} weight="duotone" />
				)}
			</div>
			<div className="theme-button-right">
				<GithubLogo size={20} weight="duotone" />
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
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>

				<div className="nav-cart flex">
					<Link to="/cart">
						<ShoppingCart
							weight="duotone"
							size={24}
							color={theme === "light" ? "var(--white)" : "var(--teal)"}
						/>
					</Link>
					<Link to="/cart">$100.00</Link>
				</div>
			</nav>
		</>
	);
}

export default Nav;
