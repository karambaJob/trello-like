import React, { PureComponent } from "react";
import { block } from 'bem-cn';
import { connect } from 'react-redux'
import { getColumns, addNewColumn } from '../../../reducers/columns';

import Column from '../column/Column';

import './style.less';
const b = block('board');

class Board extends PureComponent {
	componentDidMount() {
		const { getColumns } = this.props;
		getColumns();
	}

	render() {
		const { columns, addNewColumn } = this.props;

		return (
			<div className={b()}>
				<div className={b('menu')}>
					some top menu
				</div>
				<div className={b('columns')}>
					{columns.map((column => 
						<div key={column.id} className={b('column')}>
							<Column id={column.id} data={column.data} cards={column.cards}/>
						</div>
					))}
					<div key="new-column" className={b('column', {add: true})} onClick={addNewColumn}>
						Добавить еще одну колонку
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	columns: state.columns
});

const mapDispatchToProps = dispatch => {
	return {
		addNewColumn: () => dispatch(addNewColumn()),
		getColumns: () => {
			dispatch(getColumns())
		}
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);
