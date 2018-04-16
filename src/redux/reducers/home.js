import * as Types from '../action-types';
let initState = {
    sliders:[], //存放的是轮播图的数据
    homeTopics: []
};
export function home(state=initState,action) {
    switch (action.type){
        case Types.GET_SLIDERS:
            return {...state,sliders:action.sliders};
        case Types.GET_HOME_TOPICS:
            return {...state,homeTopics:action.homeTopics};
    }
    return initState;
}

//sliders 要通过ajax请求数据，通过action请求数据，请求成功 派发到对应的reducers

//1次 后台先要拿到 前十条
// 在上次的10条之后在获取十条