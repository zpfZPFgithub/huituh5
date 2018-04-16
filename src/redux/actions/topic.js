import * as Types from '../action-types';

export const getTopicPage = () => (dispatch,getState)=>{
    setTimeout(function(){
        dispatch({
            type: Types.GET_TOPIC_PAGE,
            topicPage: {title:"测试测试", intro: '测试测试测试测试测试测试测试测试测试测试测试测试测试'}
        })
   }, 3000)
};



