import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

import Board from "./elements/board/Board";

import './bootstrap.min.css';
import './style.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			data: {},
			isLoading: true
		};
	}

	componentWillMount() {
		// async get data
		const cards = [{"id":1,"column_id":1,"data":{"name":"Some name","desc":"some desc"},"createdAt":"2019-09-08T09:14:53.939Z","deletedAt":null},{"id":2,"column_id":1,"data":{"name":"Some other name","desc":"some other desc"},"createdAt":"2019-09-08T09:14:53.939Z","deletedAt":null}];
		const fetchData = [{name: "первая колонка", items: cards}];

		setTimeout(() => {
			this.setState({
				data: fetchData,
				isLoading: false
			})
		}, 1000);
	}

	render() {
		const {data, isLoading} = this.state;

		return (
			<div>
				{isLoading && <div><Spinner animation="border" variant="primary" /></div>}
				{!isLoading && <Board data={data} />}
			</div>
		);
	}
}

export default App;