import fetch from 'isomorphic-fetch';
import React from 'react';
import Layout from '../layout/default'

import PostList from '../components/PostList';

export default class Blog extends React.Component {
	static async getInitialProps() {
		const apiPosts = 'https://jsonplaceholder.typicode.com/posts'
		const posts = await (await fetch(apiPosts)).json()
		return {
			posts
		}
	}

	render() {
		const { posts } = this.props;
		return (
			<Layout title="Blog">
				<div className="container mt-3">
					<h1 className="text-center">Posts</h1>
					<hr/>
					<div className="mb-3">
						<PostList posts={posts} />
					</div>
				</div>
			</Layout>
		)
	}
}
