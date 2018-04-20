//首页的动作
//放一些 action-creator 函数返回action
import * as Types from '../action-types';
import {getSliders, getTopic} from '../../api/ajax/home'
//普通的action 都是返回的对象，reduxThunk支持异步,将dispatch的权限转交给自己
export const getSlider = () => (dispatch,getState)=>{
    //dispatch 可以派发action
    //getState 可以获取redux中的状态
    getSliders().then(sliders=>{
        let r = [];
        if(sliders.Code==1){
            r = sliders.Focus;
        }
        dispatch({
            type:Types.GET_SLIDERS,
            sliders: r
        })
    })
   
};
export const getHomeTopics = () => (dispatch,getState)=>{
   getTopic().then(r=>{
    let arr = [];
    if(r.Code==1){
        arr = r.Focus;
    }
    dispatch({
        type: Types.GET_HOME_TOPICS,
        homeTopics: arr
    })
})
};




