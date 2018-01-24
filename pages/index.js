import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import Layout from '../layout/default';
import Welcome from '../components/home/Welcome';
import Todo from '../components/Todo';

import initStore from '../utils/store';

class Index extends React.Component {
	static async getInitialProps({ store }) {
		// Adding a default/initialState can be done as follows:
		store.dispatch({ type: 'ADD_TODO', text: 'Redux dispatch to store' });
	}

	render() {
		return (
			<Layout>
				<div>
					<Welcome/>
					<div className="container">
						<div>
							<Todo />
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withRedux(initStore)(Index);
