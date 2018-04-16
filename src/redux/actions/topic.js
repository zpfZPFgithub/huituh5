import * as Types from '../action-types';

// 获取专题页面第一屏展示数据
export const getTopicPage = () => (dispatch,getState)=>{
    setTimeout(function(){
        dispatch({
            type: Types.GET_TOPIC_PAGE,
            topicPage: {title:"测试测试", intro: '测试测试测试测试测试测试测试测试测试测试测试测试测试'}
        })
   }, 300)
};

// 获取专题页面所有专题下拉数据
export const getTopicTopics = () => (dispatch,getState)=>{
    let {
        hasMore,
        offset,
        limit
    } = getState().topic["topics"];//state.topic.topics
    //要调用ajax请求，请求时需要 limit offset currentLesson
    if(!hasMore){
        return;
    }
    setTimeout(function(){
        dispatch({
            type: Types.GET_TOPIC_TOPICS,
            hasMore: true,
            topics: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        })
   }, 300)
};


