import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Drawer />
			<div className="content">
				<div className="content__top">
					<h3 className="content__title">Все кроссовки</h3>
					<div className="content__search">
						<img src="/img/search.svg" alt="Search" />
						<input placeholder="Поиск..." />
					</div>
				</div>
				<div className="content__box">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
