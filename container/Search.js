import React from 'react';
import Input from '../component/element/Input';
import Button from '../component/element/Button';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {deleteToDo} from '../actions/todo';
import store from '../store/store';

class Search extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }  

    handleChange(e){
        this.setState({searchString:e.target.value});
    }

    handleDelete(e){
        // var targetKey = e.target.datakey;
        var index = e.target.getAttribute('data');
        store.dispatch(deleteToDo(index));
        this.forceUpdate()

    }

    render(){
        const {lists} = this.props; //get list from store
        var _this = this;
        var list = lists;
        var searchString = this.state.searchString.trim().toLowerCase();
        if(searchString.length > 0){
            list = list.filter(function(l){
                return l.title.toLowerCase().match( searchString );
            });

        }
        var todoList = list.map(function(l,index){
            return (
                <li key={index}>{l.title}<span>{l.detail}</span> 
                    <Button className="btn btn-danger" type="button" onClick={_this.handleDelete} text="Delete" data={index}/>
                </li>
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

// const getList = state => {
//     return {
//         lists: state.update.lists
//     }
// }
function mapStateToProps(state){
    return {
        lists: state.update.lists
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteToDo}, dispatch);
}
// 利用connect将组件与Redux绑定起来
export default connect(mapStateToProps,mapDispatchToProps)(Search);