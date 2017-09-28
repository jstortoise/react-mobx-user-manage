import React from 'react';
import {inject, observer} from 'mobx-react';
import UserList from '../components/UserList';

@inject('userStore') @observer
export default class UserListContainer extends React.Component {
	render() {
		const userStore = this.props.userStore;
		return (
			<UserList users={userStore.users} />
		);
	}
}
