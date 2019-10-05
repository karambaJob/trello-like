import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const initialState = {
	columns: [{
		id: 1,
		data: {
			name: 'First column name'
		}
	}, {
		id: 2,
		data: {
			name: 'Second column name'
		}
	}],
	cards: [{
		id: 1,
		columnId: 1,
		data: {
			name: 'First card name',
			desc: 'First card descr'
		}
	}, {
		id: 2,
		columnId: 2,
		data: {
			name: 'Second card name'
		}
	}]
};

const store = createStore(rootReducer, initialState);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)