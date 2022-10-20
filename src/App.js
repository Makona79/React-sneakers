import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);
	//const [cardFavorite, setCardFavorite] = React.useState(false);
	React.useEffect(() => {
		fetch("https://63306eb9591935f3c88fd5e5.mockapi.io/Items")
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	const onAddToCart = (obj) => {
		setCartItems(prev =>[...prev, obj]);
	};
	return (
		<div className="wrapper">
			<Header onClickCart={() => setCartOpened(true)} />
			{cartOpened && (
				<Drawer items={cartItems} onClose={() => setCartOpened(false)} />
			)}
			<div className="content">
				<div className="content__top">
					<h3 className="content__title">Все кроссовки</h3>
					<div className="content__search">
						<img src="/img/search.svg" alt="Search" />
						<input placeholder="Поиск..." />
					</div>
				</div>
				<div className="content__box">
					{items.map((obj) => (
						<Card
							title={obj.title}
							price={obj.price}
							imageUrl={obj.imageUrl}
							onFavorite={() => console.log("сердце")}
							onPlus={(obj) => onAddToCart(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
