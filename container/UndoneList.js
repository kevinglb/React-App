import React from 'react';
import Input from '../component/element/Input';
import Button from '../component/element/Button';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {deleteToDo,completeToDo} from '../actions/todo';
import store from '../store/store';

class UndoneList extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }  

    handleChange(e){
        this.setState({searchString:e.target.value});
    }

    handleDelete(e){
        // var targetKey = e.target.datakey;
        var index = e.target.getAttribute('data-key');
        store.dispatch(deleteToDo(index));
        this.forceUpdate();//force update after removing item from list
    }

    handleDone(e){
        var index = e.target.getAttribute('data-key');
        store.dispatch(completeToDo(index));
        this.forceUpdate();
    }

    render(){
        const {todoList} = this.props; //get list from store
        var _this = this;
        var undoneList = todoList.filter(function(l){
            return (!l.done);
        });

        var searchString = this.state.searchString.trim().toLowerCase();
        
        if(searchString.length > 0){
            undoneList = undoneList.filter(function(l){
                return l.title.toLowerCase().match( searchString );
            });
        }

        var  ToDoList = undoneList.map(function(l,index){
            return (
                <li key={index}>
                    <div className="todo-title">
                        {l.title}
                        <Button className="btn btn-danger" type="button" onClick={_this.handleDelete} text="Delete" data={l.number}/>
                        <Button className="btn btn-success" type="button" onClick={_this.handleDone} text="Done" data={l.number}/>
                    </div>
                    <div className="todo-detail">
                        <p>{l.detail}</p>
                    </div>
                </li>
            );
        });

        return(
            <div className="todoList">
                <h1 className="text-center">Undone List</h1>
                <Input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                <ul>
                    {ToDoList} 
                </ul>
            </div>)
    }
}

function mapStateToProps(state){
    return {todoList: state.update.todoList};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteToDo,completeToDo}, dispatch);
}
// 利用connect将组件与Redux绑定起来
export default connect(mapStateToProps,mapDispatchToProps)(UndoneList);