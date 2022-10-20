import React from "react";

const Card = ({ imageUrl, title, price, onFavorite, onPlus }) => {
	const [isAdded, setIsAdded] = React.useState(false);
	const onClickPlus = () => {
		//setIsAdded(true);
		onPlus({imageUrl, title, price});
		setIsAdded(!isAdded);
	};

	return (
		<div className="content__card card">
			<img
				onClick={onFavorite}
				width={32}
				height={32}
				src="/img/liked.svg"
				alt="кроссовки зеленые"
				className="card__favorite"
			/>
			<img
				width={133}
				height={122}
				src={imageUrl}
				alt="кроссовки зеленые"
				className="card__image"
			/>
			<h4 className="card__title">{title}</h4>
			<div className="card__box-price">
				<div className="card__price">
					<p>Цена:</p>
					<span>{price}руб.</span>
				</div>
				<button className="card__button" onClick={onClickPlus}>
					<img
						className="card__image"
						width={32}
						height={32}
						src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
						alt="plus"
					/>
				</button>
			</div>
		</div>
	);
};

export default Card;
