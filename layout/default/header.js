import React, { Component } from 'react'
import Link from '../../components/Link'

class Header extends Component {
	render () {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<div className="container">
					<Link href="/">
						<a className="navbar-brand">
							Next simple starter
			      </a>
		      </Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item">
								<Link activeClassName='active' href='/blog'>
									<a className="nav-link">
										Blog
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
				    </ul>
				    <form className="form-inline my-2 my-lg-0">
				      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
				      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
				    </form>
					</div>
		    </div>
		  </nav>
		)
	}
}

export default Header
