import React from "react";

const Card = () => {
	return (
		<div className="content__card card">
			<img
				width={32}
				height={32}
				src="/img/liked.svg"
				alt="кроссовки зеленые"
				className="card__favorite"
			/>
			<img
				width={133}
				height={122}
				src="/img/sneakers/1.jpg"
				alt="кроссовки зеленые"
				className="card__image"
			/>
			<h4 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
			<div className="card__box-price">
				<div className="card__price">
					<p>Цена:</p>
					<span>12 999руб.</span>
				</div>
				<button className="card__button">
					<img width={11} height={11} src="/img/plus.svg" alt="plus" />
				</button>
			</div>
		</div>
	);
};

export default Card;
