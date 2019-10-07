import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

import Board from "./elements/board/Board";

import './bootstrap.min.css';
import './style.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false
		};
	}

	render() {
		const {isLoading} = this.state;

		return (
			<div>
				{isLoading && <div><Spinner animation="border" variant="primary" /></div>}
				{!isLoading && <Board />}
			</div>
		);
	}
}

export default App;