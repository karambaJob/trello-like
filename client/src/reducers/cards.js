export const cardsActions = {
	changeName: 'CARDS/CHANGE_NAME',
	add: 'CARDS/ADD',
	remove: 'CARDS/REMOVE'
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
		case cardsActions.add:
			return [
				...state,
				{
					id: Math.floor(Math.random() * Math.floor(100)),
					columnId: action.payload.columnId,
					data: {
						name: 'Новая карточка'
					}
				}
			];
		case cardsActions.remove:
			return state.filter(card =>
				card.id !== action.id
			);
		default:
			return state;
	}
}

export default columns;