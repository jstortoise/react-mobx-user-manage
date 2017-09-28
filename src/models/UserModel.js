import {observable} from 'mobx';

export default class UserModel {
	store;
	id;
	@observable name;
	@observable age;
	@observable gender;

	constructor(store, id, name, age, gender) {
		this.store = store;
		this.id = id;
		this.name = name;
		this.age = age;
		this.gender = gender;
	} 

	destroy() {
		this.store.users.remove(this);
	}

	update(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	toJS() {
		return {
			id: this.id,
			name: this.name,
			age: this.age,
			gender: this.gender
		};
	}

	static fromJS(store, object) {
		return new UserModel(store, object.id, object.name, object.age, object.gender);
	}
}
