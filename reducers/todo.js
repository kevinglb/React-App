import {ADD_TODO} from '../actions/constants';

//初始state
const initialState = {
    number: 1,
    lists: [
        { title: 'Backbone.js', detail: 'http://documentcloud.github.io/backbone/'},
        { title: 'AngularJS', detail: 'https://angularjs.org/'},
        { title: 'jQuery', detail: 'http://jquery.com/'},
        { title: 'Prototype', detail: 'http://www.prototypejs.org/'},
        { title: 'React', detail: 'http://facebook.github.io/react/'},
        { title: 'Ember', detail: 'http://emberjs.com/'},
        { title: 'Knockout.js', detail: 'http://knockoutjs.com/'},
        { title: 'Dojo', detail: 'http://dojotoolkit.org/'},
        { title: 'Mootools', detail: 'http://mootools.net/'},
        { title: 'Underscore', detail: 'http://documentcloud.github.io/underscore/'},
        { title: 'Lodash', detail: 'http://lodash.com/'},
        { title: 'Moment', detail: 'http://momentjs.com/'},
        { title: 'Express', detail: 'http://expressjs.com/'},
        { title: 'Koa', detail: 'http://koajs.com/'}
    
    ],
    data: []
}


// 通过dispatch action进入
export default function update(state = initialState, action) {
    // 根据不同的action type进行state的更新
    console.log(action.type);
    switch(action.type) {

        case ADD_TODO:
            var l = {};
            l.title = action.title;
            l.time = action.time;
            l.detail = action.detail;
            state.lists.push(l);
            console.log(l);
            return Object.assign({}, state, {number: state.number + action.number, lists: state.lists })
            break;

        default:
            return state
    }
}