import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {IndexLink, Link} from	'react-router';

export default class Navigation extends React.Component{
	constructor(){
		super();
		this.state = {
			collapsed: true
		};
	}
	render(){
		return(
      <div className="left-nav">
			<nav className="navbar navbar-fixed-top" role="navigation">
			<div className="container">
  				<div className="navbar-header">
  					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#topNavigation" aria-expanded="false">
        				<span className="sr-only">Navigation</span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
      				</button>
  				</div>
        	<div className="collapse navbar-collapse" id="topNavigation">
          	<ul className="nav navbar-nav">
            	<li>
              	<Link to="/" activeClassName="active">Home</Link>
            	</li>
            	<li>
              	<Link to="course" activeClassName="active">Course</Link>
		          </li>
        		  <li>
              	<Link  to="topic" activeClassName="active">Topic</Link>
		          </li>
              <li>
                <Link to="note" activeClassName="active">Note</Link>
              </li>
              <li>
                <Link  to="search" activeClassName="active">Search</Link>
              </li>
              <li>
                <Link  to="add" activeClassName="active">
                  <span className="glyphicon glyphicon-plus"></span>
                </Link>
              </li>
        		  	</ul>
       			 </div>
      		</div>
      		</nav>
        </div>
		);
	}
}