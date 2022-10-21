import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>
// );
// ReactDOM.render(
// 	<React.StrictMode>
// 		<Router>
// 			<App />
// 		</Router>
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

const rootElem = document.getElementById("root");
if (rootElem) {
	const root = ReactDOM.createRoot(rootElem);
	root.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}
