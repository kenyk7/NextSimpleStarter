import Link from 'next/link'

export default () => (
	<div className="jumbotron">
		<div className="container text-center">
			<h1 className="display-4">
				Welcome to Next simple starter
			</h1>
		  <p className="lead">
		  	Discover the best events in the city!
		  </p>
		  <p className="lead">
		  	<Link href="/blog">
		      <a className="btn btn-primary btn-lg">Learn more</a>
		    </Link>
		  </p>
		</div>
	</div>
)
