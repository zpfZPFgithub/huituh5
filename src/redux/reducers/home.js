import * as Types from '../action-types';
let initState = {
    sliders:[], //存放的是轮播图的数据
    homeTopics: [],
    lessons:{ //滚动加载的redux中的数据
        hasMore:true, //是否有更多数据
        offset:0, //每次获取的偏移量
        limit:10, //每次限制获取多少条
        list:[],//获取的数据列表
        loading:false //如果正在加载就不要再去加载数据
    }
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