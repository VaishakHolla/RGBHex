import React, { Component } from "react";
import axios from "axios";
import https from "https";
export default class SearchBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rgbValue: "",
			hexValue: " "
		};
		this.processEntry = this.processEntry.bind(this);
	}
	search() {
		console.log(this.state.searchValue);
	}

	processEntry = e => {
		document.documentElement.style.setProperty(
			"--background-selector",
			"black"
		);
		console.log(e.target.id);
		this.setState({
			rgbValue: e.target.value,
			hexValue: e.target.value.toUpperCase()
		});
	};

	render() {
		return (
			<div>
				<div>Enclose</div>
				<input
					type="text"
					id="rgbBox"
					value={this.state.rgbValue}
					onChange={this.processEntry}
				/>
				<input
					type="text"
					id="hexBox"
					value={this.state.hexValue}
					onChange={e => this.setState({ hexValue: e.target.value })}
				/>
			</div>
		);
	}
}
