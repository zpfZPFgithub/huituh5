import {combineReducers} from 'redux';
import {home} from './home';
import {topic} from './topic';
import {user} from './user';
import {search} from './search';
import {routerReducer} from 'react-router-redux'
//state => state.home.currentLesson
//  => state.aa.xxx
//路由的状态 state.router.location.path
export default combineReducers({
    home,
    topic,
    user,
    search,
    router:routerReducer
});//导出合并后的reducer;