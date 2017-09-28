import React from 'react';
import {inject, observer} from 'mobx-react';
import UserCreate from '../components/UserCreate';

@inject('userStore') @observer
export default class UserCreateContainer extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.createUser = this.createUser.bind(this);
	}
	render() {
		const userStore = this.props.userStore;
		return (
			<UserCreate userStore={userStore} createUser={this.createUser} />
		);
	}

	createUser = (user) => {
		this.props.userStore.addUser(user.name, user.age, user.gender);
	}
}
