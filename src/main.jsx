import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./Helpers/css-reset.css";
import "./index.css";
import { CartContextProvider } from "./Context/Cart/CartState";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<CartContextProvider>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route element={<Home />} index />
					<Route path="/about" element={<About />} />
					<Route path="/cart" element={<Cart />} />
				</Route>
			</Routes>
		</HashRouter>
	</CartContextProvider>
);
