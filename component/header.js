import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Link} from	'react-router';

export default class Header extends React.Component{
	render(){
		return(
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
          				{this.props.children}
            			<li>
              				<Link to="featured">Featured</Link>
            			</li>
            			<li>
              				<Link to="archives">Archives</Link>
		            	</li>
        		    	<li>
              				<Link  to="settings">Settings</Link>
		            	</li>
        		  	</ul>
       			 </div>
       
      		</div>
		);
	}
}