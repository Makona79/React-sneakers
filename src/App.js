import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [favorites, setFavorites] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");
	React.useEffect(() => {
		axios
			.get("https://63306eb9591935f3c88fd5e5.mockapi.io/Items")
			.then((res) => {
				setItems(res.data);
			});
		axios
			.get("https://63306eb9591935f3c88fd5e5.mockapi.io/cart")
			.then((res) => {
				setCartItems(res.data);
			});
	}, []);

	const onAddToCart = (obj) => {
		axios.post("https://63306eb9591935f3c88fd5e5.mockapi.io/cart", obj);
		setCartItems((prev) => [...prev, obj]);
	};
	const onAddToFavorite = (obj) => {
		axios.post("https://63306eb9591935f3c88fd5e5.mockapi.io/favorite", obj);
		setFavorites((prev) => [...prev, obj]);
	};
	const onRemoveItem = (id) => {
		axios.delete(`https://63306eb9591935f3c88fd5e5.mockapi.io/cart/${id}`);
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};
	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className="wrapper">
			<Header onClickCart={() => setCartOpened(true)} />
			{cartOpened && (
				<Drawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
					onRemove={onRemoveItem}
				/>
			)}
			{/* <Route path="/test">wwwwwwwwwwwwww</Route>  */}
			{/* <Route path="/" exact>
			<Home
				items={items}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				onChangeSearchInput={onChangeSearchInput}
				onAddToFavorite={onAddToFavorite}
				onAddToCart={onAddToCart}
			/>
			 </Route>   */}

			<Routes>
				<Route
					path="/"
					exact
					element={
						<Home
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToFavorite={onAddToFavorite}
							onAddToCart={onAddToCart}
							items={items}
						/>
					}
				></Route>
				{/* <Route path="/favorites" exact element={<Favorites />}></Route> */}
			</Routes>
		</div>
	);
}

export default App;
