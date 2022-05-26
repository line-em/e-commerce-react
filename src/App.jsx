import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import "./Helpers/css-reset.css";

function App() {
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

			<main>
				<Nav />
				<Outlet />
			</main>
		</>
	);
}

export default App;
