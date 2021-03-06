import React, { PureComponent } from "react";
import { block } from 'bem-cn';
import { connect } from 'react-redux'
import Editable from '../../ui/editable/Editable';
import { addNewCard } from '../../../reducers/cards';
import { updateColumn } from '../../../reducers/columns';

import MiniCard from '../miniCard/MiniCard';

import './style.less';
const b = block('column');

class Column extends PureComponent {
	render() {
		const {cards = [], data} = this.props;

		if (!data || !data.name) {
			return null;
		}

		return (
			<div className={b()}>
				<h2 className={b('name')}>
					<Editable value={data.name} onSave={this.props.changeNameHandler}/>
				</h2>
				<ul className={b('list')}>
					{cards.map((cardData, i) => {
						return (
							<li key={i} className={b('list-item')}>
								<MiniCard title={cardData.data.name}
										  desc={cardData.data.desc}
										  id={cardData.id}></MiniCard>
							</li>
						)
					})}
					<li 
						key="add"
						onClick={this.props.addNewCard}
						className={b('list-item', {'add-control': true})}
					>
						Добавить
					</li>
				</ul>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		addNewCard: () => dispatch(addNewCard(props.id)),
		changeNameHandler: (newValue) => dispatch(updateColumn(props.id, {
			name: newValue
		})),
	};
}

export default connect(
	null,
	mapDispatchToProps
)(Column);