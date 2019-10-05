import React, { PureComponent } from "react";
import { block } from 'bem-cn';
import { connect } from 'react-redux'

import Editable from '../../ui/editable/Editable';
import {cardsActions} from '../../../reducers/cards';

import './style.less';
const b = block('mini-card');

class MiniCard extends PureComponent {
	render() {
		const {title, desc} = this.props;

		return (
			<div className={b()}>
				<h3 className={b('name')}>
					<Editable value={title} onSave={this.props.changeNameHandler}/>
				</h3>
				<p>
					<Editable value={desc}/>
				</p>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		changeNameHandler: (newValue) => dispatch({
			type: cardsActions.changeName,
			payload: {
				name: newValue,
				id: props.id
			}
		})
	};
}

export default connect(null, mapDispatchToProps)(MiniCard);