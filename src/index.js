import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "./SearchBox.jsx";
import "./styles.css";

function App() {
	return (
		<div className="App">
			<SearchBox />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
