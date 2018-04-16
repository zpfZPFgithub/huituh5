//首页的动作
//放一些 action-creator 函数返回action
import * as Types from '../action-types';
import {getSliders} from '../../api/ajax/home'
//普通的action 都是返回的对象，reduxThunk支持异步,将dispatch的权限转交给自己
export const getSlider = () => (dispatch,getState)=>{
    //dispatch 可以派发action
    //getState 可以获取redux中的状态
    /*
    getSliders().then(sliders=>{
        dispatch({
            type:Types.GET_SLIDERS,
            sliders
        })
    })
    */
   setTimeout(function(){
        dispatch({
            type: Types.GET_SLIDERS,
            sliders: [1,2]
        })
   }, 200)
};
export const getHomeTopics = () => (dispatch,getState)=>{
    setTimeout(function(){
        dispatch({
            type: Types.GET_HOME_TOPICS,
            homeTopics: [3,4,6,8]
        })
   }, 200)
};




