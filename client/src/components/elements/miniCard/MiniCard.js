import React, { PureComponent } from "react";

import './style.less';

class MiniCard extends PureComponent {
	render() {
		const {title, desc} = this.props;

		return <div className="miniCard">
			<h3>{title}</h3>
			<p>{desc}</p>
		</div>
	}
}

export default MiniCard;