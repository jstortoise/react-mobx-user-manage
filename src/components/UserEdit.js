
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
export default class UserEdit extends React.Component {
	render() {
		const userStore = this.props.userStore;
		return (
			<section className="main">
				<label>Name</label>
				<input type="text" ref="name" defaultValue={userStore.name} />
				<label>Age</label>
				<input type="text" ref="age" defaultValue={userStore.age}/>
				<label>Gender</label>
				<input type="text" ref="gender" defaultValue={userStore.gender}/>
				<button className="button edit" onClick={this.handleSubmit}>Save</button>
			</section>
		);
	}

	handleSubmit = () => {
		this.props.editUser({
			id: this.props.userStore.id,
			name: this.refs.name.value ,
			age: this.refs.age.value,
			gender: this.refs.gender.value
		});
		this.context.router.history.push('/');
	}
}

UserEdit.contextTypes = {
	router: PropTypes.object
};
