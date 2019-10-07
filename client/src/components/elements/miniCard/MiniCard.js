import React, { PureComponent } from "react";
import { block } from 'bem-cn';
import { connect } from 'react-redux'

import Editable from '../../ui/editable/Editable';
import { updateCard } from '../../../reducers/cards';

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
				{desc && (
					<p>
						<Editable value={desc} onSave={this.props.changeDescHandler}/>
					</p>
				)}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		changeNameHandler: (newValue) => dispatch(updateCard(props.id, {
			name: newValue,
			desc: props.desc
		})),
		changeDescHandler: (newValue) => dispatch(updateCard(props.id, {
			name: props.name,
			desc: newValue
		}))
	};
}

export default connect(null, mapDispatchToProps)(MiniCard);