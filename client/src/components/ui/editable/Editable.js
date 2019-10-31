import React, { PureComponent } from "react";
import Form from 'react-bootstrap/Form'
import { block } from 'bem-cn';

import './style.less';
const b = block('editable');

function isChildElement(domElment, parentDomElement) {
	while (domElment.parentNode) {
		if (domElment.parentNode === parentDomElement) {
			return true;
		}

		domElment = domElment.parentNode;
	}

	return false;
}

class Editable extends PureComponent {
	constructor(props) {
		super(props);

		this.rootNode = React.createRef();

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
			<div className={b()} ref={this.rootNode}>
				{!isEditMode && <div className={b('text')} onClick={this.enableEditMode}>{value}</div>}
				{ isEditMode && (
					<div>
						<Form.Control size="sm"
									  type="text"
									  autoFocus
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
		if (!isChildElement(e.target, this.rootNode.current)) {
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