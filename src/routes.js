import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserListContainer from './containers/UserListContainer';
import UserEditContainer from './containers/UserEditContainer';
import UserCreateContainer from './containers/UserCreateContainer';

export default (
	<Router>
		<div>
			<Route exact path="/" component={UserListContainer} />
			<Route path="/add" component={UserCreateContainer} />
			<Route path="/edit/:id" component={UserEditContainer} />
		</div>
	</Router>
);
