import React from 'react';
import Input from '../component/element/Input';
import { connect } from 'react-redux';
class Search extends React.Component{
	
    constructor(props) {
      super(props);
      this.state = {
        searchString: ''
      };

      
      this.handleChange = this.handleChange.bind(this);
  }  

    handleChange(e){
        this.setState({searchString:e.target.value});
    }

    render(){
        const { lists } = this.props;
        var list = lists;
        var searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            list = list.filter(function(l){
                return l.title.toLowerCase().match( searchString );
            });

        }
        var todoList = list.map(function(l){
                return (
                    <li key={l.title}>{l.title}<a href={l.detail} target="_blank">{l.detail}</a></li>
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

const getList = state => {
    return {
        lists: state.update.lists
    }
}

// 利用connect将组件与Redux绑定起来
export default connect(getList)(Search);