import React from 'react';
import Input from './element/Input'
export default class Search extends React.Component{
	
    constructor(props) {
      super(props);
      this.state = {
        searchString: '',
        libs:[
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'}
    ]
      };


      this.handleChange = this.handleChange.bind(this);
  }  

    handleChange(e){
        this.setState({searchString:e.target.value});
    }

    render(){

        var libraries = this.state.libs,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }
        var todoList = libraries.map(function(l){
                            return (
                                <li key={l.name}>{l.name}<a href={l.url} target="_blank">{l.url}</a></li>
                            );
                        });

        return(
            <div className="todoList">
                <Input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                <ul>
                    {todoList} 
                </ul>
            </div>)

    }

}