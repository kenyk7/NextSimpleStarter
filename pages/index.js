import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import Fork from '../components/Fork';
import Todo from '../components/Todo';
import Users from '../components/Users';

import initStore from '../utils/store';

class Index extends React.Component {
	static async getInitialProps({ store }) {
		// Adding a default/initialState can be done as follows:
		// store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
		const resRepo = await fetch(
			'https://api.github.com/repos/ooade/NextSimpleStarter'
		);
		const repo = await resRepo.json();
		const resUsers = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		);
		const users = await resUsers.json();
		return {
			users,
			stars: repo.stargazers_count
		};
	}

	render() {
		const { stars, users} = this.props;
		return (
			<div>
				<Fork stars={stars} />
				<div>
					<Todo />
				</div>
				<Users users={users} />
			</div>
		);
	}
}

export default withRedux(initStore)(Index);
