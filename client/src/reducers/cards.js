import { getColumns } from './columns';

export const cardsActions = {
	changeName: 'CARDS/CHANGE_NAME',
	add: 'CARDS/ADD',
	addSuccess: 'CARDS/ADD_SUCCESS',
	addFailed: 'CARDS/ADD_FAILDE',
	remove: 'CARDS/REMOVE'
}

export function updateCard(cardId, data) {
	return function(dispatch) {
		fetch(`http://localhost:3000/api/card/${cardId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...data
			})
		})
		.then(res => {
			dispatch(getColumns());
		}).catch(err => {
			dispatch({
				type: columnsActions.addFailed,
				payload: {
					data: err
				}
			});
		});
	}
}

export function addNewCard(columnId) {
	return function(dispatch) {
		fetch('http://localhost:3000/api/card', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				columnId: columnId
			})
		})
			.then(res => {
				dispatch(getColumns());
			}).catch(err => {
				dispatch({
					type: columnsActions.addFailed,
					payload: {
						data: err
					}
				});
			});
	}
}

const columns = (state = [], action) => {
	switch (action.type) {
		case cardsActions.changeName:
			return state.map(card => {
				if (card.id === action.payload.id) {
					const updatedCard = {...card};
					updatedCard.data.name = action.payload.name;
					return {
						...updatedCard
					}
				}

				return card;
			});
		case cardsActions.remove:
			return state.filter(card =>
				card.id !== action.id
			);
		default:
			return state;
	}
}

export default columns;