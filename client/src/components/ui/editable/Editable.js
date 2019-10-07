import React, { PureComponent } from "react";
import Form from 'react-bootstrap/Form'
import { block } from 'bem-cn';

import './style.less';
const b = block('editable');

class Editable extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isEditMode: false,
			value: props.value
		}

		this.windowClickHandler = this.windowClickHandler.bind(this);
	}

	render() {
		const {placeholder} = this.props;
		const {isEditMode, value} = this.state;

		return (
			<div className={b()}>
				{!isEditMode && <div className={b('text')} onClick={this.enableEditMode}>{value}</div>}
				{ isEditMode && (
					<div>
						<Form.Control size="sm"
									  type="text"
									  placeholder={placeholder}
									  value={value}
									  onChange={this.handleChange} />
					</div>
				)}
			</div>
		);
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		});
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.windowClickHandler);
	}

	windowClickHandler(e) {
		if (!e.target.closest('.editable')) {
			this.setState({
				isEditMode: false
			});
			window.removeEventListener('click', this.windowClickHandler);

			const {onSave} = this.props;
			if (onSave) {
				onSave(this.state.value);
			}
		}
	}

	enableEditMode = () => {
		this.setState({
			isEditMode: true
		});
		document.body.addEventListener('click', this.windowClickHandler);
	}
}

export default Editable;