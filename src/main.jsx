import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import "./index.css";
import CartState from "./Context/Cart/CartState";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<CartState>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route element={<Home />} index />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</CartState>
);
