
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
export default class UserCreate extends React.Component {
	render() {
		return (
			<section className="main">
				<label>Name</label>
				<input type="text" ref="name"/>
				<label>Age</label>
				<input type="text" ref="age"/>
				<label>Gender</label>
				<input type="text" ref="gender"/>
				<button className="button edit" onClick={this.handleSubmit}>Save</button>
			</section>
		);
	}

	handleSubmit = () => {
		this.props.createUser({
			name: this.refs.name.value,
			age: this.refs.age.value,
			gender: this.refs.gender.value
		});
		this.context.router.history.push('/');
	}
}

UserCreate.contextTypes = {
	router: PropTypes.object
};
