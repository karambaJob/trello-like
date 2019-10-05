export const columnsActions = {
	add: 'COLUMNS/ADD',
	remove: 'COLUMNS/REMOVE'

}
const columns = (state = [], action) => {
	switch (action.type) {
		case columnsActions.add:
			return [
				...state,
				{
					id: Math.floor(Math.random() * Math.floor(100)),
					data: {
						name: 'Новая колонка'
					}
				}
			];
		case columnsActions.remove:
			return state.filter(column =>
				column.id !== action.id
			);
		default:
			return state;
	}
}

export default columns;