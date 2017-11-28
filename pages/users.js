import 'isomorphic-fetch';
import React from 'react';

import UsersTable from '../components/Users';

export default class Users extends React.Component {
	static async getInitialProps({ store }) {
		// Adding a default/initialState can be done as follows:
		const resUsers = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		);
		const users = await resUsers.json();
		return {
			users
		};
	}

	render() {
		const { users } = this.props;
		return (
			<div>
				<center><h1>Users</h1></center>
				<UsersTable users={users} />
			</div>
		);
	}
}
