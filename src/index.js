import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import UserStore from './stores/UserStore';

const initialState = {
	users: [
		{id: 1, name: 'Daniel', age: 23, gender: 'Male' },
		{id: 2,  name: 'Mauro', age: 36, gender: 'Male' },
		{id: 3,  name: 'Carmen', age: 31, gender: 'Female' },
		{id: 4,  name: 'Carlo', age: 20, gender: 'Male' },
		{id: 5,  name: 'Mara', age: 44, gender: 'Female' }
	]
};

var userStore = UserStore.fromJS(initialState.users || []);

ReactDOM.render(
	<Provider userStore={userStore}>
		{routes}
	</Provider>
	, document.getElementById('root')
);

registerServiceWorker();
