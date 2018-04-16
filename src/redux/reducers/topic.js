import * as Types from '../action-types';
let initState = {
    topicPage:{}, // 专题页面的初始化数据
    topics: { // 滚动加载中redux中的数据
        hasMore: true,
        offset: 1,
        limit: 10,
        list: [],
        loading: false
    }
};
export function topic(state=initState,action) {
    switch (action.type){
        case Types.GET_TOPIC_PAGE:
            return {...state,topicPage:action.topicPage};
        case Types.GET_TOPIC_TOPICS:
            return {...state, topics:{
                ...state.topics,
                hasMore: action.hasMore,
                list:[...state.topics.list,...action.topics],
                offset: state.topics.offset+1
            }
        };
    }
    return initState;
}

//sliders 要通过ajax请求数据，通过action请求数据，请求成功 派发到对应的reducers

//1次 后台先要拿到 前十条
// 在上次的10条之后在获取十条