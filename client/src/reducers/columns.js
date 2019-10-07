export const columnsActions = {
	add: 'COLUMNS/ADD',
	remove: 'COLUMNS/REMOVE',
	loadSuccess: 'COLUMNS/LOAD_SUCCESS',
	load: 'COLUMNS/LOAD',
	loadFailed: 'COLUMNS/LOAD_FAILED'
}

export function getColumns() {
	return function(dispatch) {
		fetch('http://localhost:3000/api/columnList')
			.then(res => res.json())
			.then(res => {
				dispatch({
					type: columnsActions.loadSuccess,
					payload: {
						data: res
					}
				});
			}).catch(err => {
				dispatch({
					type: columnsActions.loadFailed,
					payload: {
						data: err
					}
				});
			});
	}
}

const columns = (state = [], action) => {
	switch (action.type) {
		case columnsActions.loadSuccess:
			return [
				...action.payload.data
			];
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