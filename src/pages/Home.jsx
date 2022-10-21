import React from "react";
import Card from "../components/Card";

const Home = (
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onAddToCart
) => {
	return (
		<div className="content">
			<div className="content__top">
				<h3 className="content__title">Все кроссовки</h3>
				<p>{searchValue ? `Поиск по запросу : "${searchValue}"` : ""}</p>
				<div className="content__search search">
					<img src="/img/search.svg" alt="Search" />
					{searchValue && (
						<img
							onClick={() => setSearchValue("")}
							className="search__clear"
							src="/img/btn-remove.svg"
							alt="clear"
						/>
					)}
					<input
						onChange={onChangeSearchInput}
						value={searchValue}
						placeholder="Поиск..."
					/>
				</div>
			</div>
			<div className="content__box">
				{items
					.filter((obj) =>
						obj.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map((obj) => (
						<Card
							key={obj.index}
							title={obj.title}
							price={obj.price}
							imageUrl={obj.imageUrl}
							onFavorite={(obj) => onAddToFavorite(obj)}
							onPlus={(obj) => onAddToCart(obj)}
						/>
					))}
			</div>
		</div>
	);
};

export default Home;
