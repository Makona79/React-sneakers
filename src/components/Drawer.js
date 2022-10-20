import React from "react";

const Drawer = () => {
	return (
		<div className="overlay">
			<div className="drawer">
				<h2 className="drawer__title">Корзина</h2>
				<img className="drawer__close" src="/img/btn-remove.svg" alt="close" />
				<div className="drawer__content">
					<div className="drawer__cart-item cart-item">
						<img
							width={70}
							height={70}
							className="cart-item__image"
							src="/img/sneakers/1.jpg"
							alt="Sneakers"
						/>
						<div className="cart-item__descr">
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<span>12 999руб.</span>
						</div>
						<img
							className="cart-item__icon"
							src="/img/btn-remove.svg"
							alt="remove"
						/>
					</div>
				</div>
				<div className="drawer__box-summ">
					<ul className="drawer__summ summ">
						<li className="summ__item">
							<span>Итого:</span>
							<div className="summ__dash"></div>
							<b>21 498 руб.</b>
						</li>
						<li className="summ__item">
							<span>Налог 5%:</span>
							<div className="summ__dash"></div>
							<b>1 074 руб.</b>
						</li>
					</ul>
					<button className="drawer__button btn">
						<span>Оформить заказ</span>
						<img src="/img/arrow.svg" alt="arrow" aria-label="hidden" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
