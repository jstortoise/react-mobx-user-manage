import {observable, computed} from 'mobx';
import UserModel from '../models/UserModel'
import * as Utils from '../utils';

export default class UserStore {
	@observable users = [];

	@computed get userCount() {
		return this.users.length;
	}

	addUser (name, age, gender) {
		this.users.push(new UserModel(this, Utils.uuid(), name, age, gender));
	}

	getUser (uuid) {
		return this.users.find(user => user.id == uuid);
	}

	editUser (uuid, name, age, gender) {
		const user = this.users.find(user => user.id == uuid);
		user.name = name;
		user.age = age;
		user.gender = gender;
	}

	deleteUser (uuid) {
		this.users = this.users.filter(
			user => !user.uuid != uuid
		);
	}

	static fromJS(array) {
		const userStore = new UserStore();
		userStore.users = array.map(item => UserModel.fromJS(userStore, item));
		return userStore;
	}
}
