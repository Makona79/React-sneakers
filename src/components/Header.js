import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<header>
			<Link to="/">
				<div className="header-left">
					<img width={40} height={40} src="/img/logo.png" alt="logo" />
					<div className="header-left__box">
						<h2 className="header-left__title">React Sneakers</h2>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>

			<ul className="header-right">
				<li onClick={props.onClickCart}>
					<img width={18} height={18} src="/img/cart.svg" alt="cart" />
					<span>1205 руб.</span>
				</li>
				<li>
					<Link to="/favorites">
						<img width={18} height={18} src="/img/heart.svg" alt="heart" />
					</Link>
				</li>
				<li>
					<img width={18} height={18} src="/img/user.svg" alt="user" />
				</li>
			</ul>
		</header>
	);
};

export default Header;
