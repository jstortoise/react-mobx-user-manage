import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
export default class UserItem extends React.Component {

	render() {
		const user = this.props.user;
		return (
			<tr>
				<td className="name">
					<label onDoubleClick={this.handleEdit}>
						{user.name}
					</label>
				</td>
				<td className="age">
					<label>{user.age}</label>
				</td>
				<td className="gender">
					<label>{user.gender}</label>
				</td>
				<td className="control">
					<button className="button edit" onClick={this.handleEdit}>Edit</button>
					<button className="button destroy" onClick={this.handleDestroy}>Delete</button>
				</td>
			</tr>
		);
	}

	handleDestroy = () => {
		this.props.user.destroy();
	};

	handleEdit = () => {
		this.context.router.history.push(`/edit/${this.props.user.id}`)
	};

}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};
UserItem.contextTypes = {
	router: PropTypes.object
};
