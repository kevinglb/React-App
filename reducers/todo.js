import {ADD_TODO,DELETE_TODO,COMPLETE_TODO,UNDO_TODO} from '../actions/constants';

//初始state
const initialState = {
    number: 14,
    todoList: [
        { number: 0, title: 'Backbone.js', detail: 'http://documentcloud.github.io/backbone/',done: false},
        { number: 1, title: 'AngularJS', detail: 'https://angularjs.org/',done: false},
        { number: 2, title: 'jQuery', detail: 'http://jquery.com/',done: false},
        { number: 3, title: 'Prototype', detail: 'http://www.prototypejs.org/',done: false},
        { number: 4, title: 'React', detail: 'http://facebook.github.io/react/',done: false},
        { number: 5, title: 'Ember', detail: 'http://emberjs.com/',done: false},
        { number: 6, title: 'Knockout.js', detail: 'http://knockoutjs.com/',done: false},
        { number: 7, title: 'Dojo', detail: 'http://dojotoolkit.org/',done: false},
        { number: 8, title: 'Mootools', detail: 'http://mootools.net/'},
        { number: 9, title: 'Underscore', detail: 'http://documentcloud.github.io/underscore/',done: false},
        { number: 10, title: 'Lodash', detail: 'http://lodash.com/',done: false},
        { number: 11, title: 'Moment', detail: 'http://momentjs.com/',done: false},
        { number: 12, title: 'Express', detail: 'http://expressjs.com/',done: false},
        { number: 13, title: 'Koa', detail: 'http://koajs.com/',done: false}
    ],
    data: []
}


// 通过dispatch action进入
export default function update(state = initialState, action) {
    // 根据不同的action type进行state的更新
    //console.log(action.type);
    switch(action.type) {
        case ADD_TODO:
            var l = {};
            l.title = action.title;
            l.time = action.time;
            l.detail = action.detail;
            state.todoList.push(l);
            console.log(l);
            return Object.assign({}, state, {number: state.number + action.number, todoList: state.todoList });
            break;
        case DELETE_TODO:
            //不能确保i和action.number相等 所以需要遍历数组
            var len = state.todoList.length;
            for(var i =0;i<len;i++){
                if(state.todoList[i].number == action.index){
                    state.todoList.splice(i,1);
                    break;
                }
            }
            return Object.assign({}, state, {todoList: state.todoList});
            break;
        case COMPLETE_TODO:
            //不能确保i和action.number相等 所以需要遍历数组
            var len = state.todoList.length;
            for(var i =0;i<len;i++){
                if(state.todoList[i].number == action.index){
                    state.todoList[i].done = true;
                }
            }
            return Object.assign({}, state, {todoList: state.todoList});
            break;
        case UNDO_TODO:
             //不能确保i和action.number相等 所以需要遍历数组
            var len = state.todoList.length;
            for(var i =0;i<len;i++){
                if(state.todoList[i].number == action.index){
                    state.todoList[i].done = false;
                }
            }
            return Object.assign({}, state, {todoList: state.todoList});

        default:
            return state
    }
}