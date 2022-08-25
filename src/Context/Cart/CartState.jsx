import { createContext, useState } from "react";
import { goodReadsBooks } from "../../data/goodReads";
import { featureBooks } from "../../data/historicalMysteriesBooks";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [itemsInCart, setItemsInCart] = useState([]);
	const allItems = goodReadsBooks.concat(featureBooks);

	console.log(allItems);

	const manageCart = (currentBookId, actionType = "add") => {
		let updatedItems = allItems.map((book) =>
			currentBookId === book.id
				? {
						...book,
						cart: (actionType === "add" && true) || (actionType === "remove" && false),
						qntd: (actionType === "add" && 1) || (actionType === "remove" && 0)
				  }
				: book
		);
		// 	console.log(
		// 	"currentBook e bookId iguais?" +
		// 		currentBookId +
		// 		book.id +
		// 		(currentBookId === book.id)
		// );
		// setItemsInCart(updatedItems.filter((book) => book.cart));
	};

	const manageQntd = (currentBookId, actionType = "increase") => {
		let updatedItems = itemsInCart.map((book) => {
			currentBookId === book.id
				? {
						...book,
						qntd: updateQntd(currentBookId, book.qntd, actionType)
				  }
				: book;
		});

		console.log(updatedItems);

		const updateQntd = (id, qntd, action) => {
			if (qntd === 0) {
				return manageCart(id, "remove");
			}
			action === "increase" ? qntd++ : qntd--;
		};
		console.log(updatedItems);
		return setItemsInCart(updatedItems.filter((book) => book.cart));
	};

	const totalPrice = itemsInCart.reduce((acc, current) => acc + current.price * current.qntd, 0);
	const totalItems = itemsInCart.reduce((acc, current) => acc + current.qntd, 0);

	const checkout = "oi";

	return (
		<CartContext.Provider
			value={{
				itemsInCart,
				manageCart,
				manageQntd,
				checkout,
				totalItems,
				totalPrice
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export { CartContext, CartContextProvider };
