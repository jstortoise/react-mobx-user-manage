import React from 'react';
import {inject, observer} from 'mobx-react';
import UserEdit from '../components/UserEdit';

@inject('userStore') @observer
export default class UserEditContainer extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.editUser = this.editUser.bind(this);
	}
	render() {
		const userStore = this.props.userStore.getUser(this.props.match.params.id);
		return (
			<UserEdit userStore={userStore} editUser={this.editUser} />
		);
	}

	editUser = (user) => {
		this.props.userStore.editUser(user.id, user.name, user.age, user.gender);
	}
}
