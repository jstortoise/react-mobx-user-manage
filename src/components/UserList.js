
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import UserItem from './UserItem';
import { Link } from 'react-router-dom';

@observer
export default class UserList extends React.Component {
	render() {
		const users = this.props.users;
		return (
			<section className="main">
				<table className="user-list">
					<tbody>
						{users.map(user =>
							(<UserItem key={user.id} user={user} />)
						)}
					</tbody>
				</table>
				<Link to="add" className="button">Add User</Link>
			</section>
		);
	}
}


UserList.propTypes = {
	users: PropTypes.object.isRequired
}

UserList.contextTypes = {
	router: PropTypes.object
};
