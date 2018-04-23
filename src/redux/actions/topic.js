import * as Types from '../action-types';
import {getTopicList} from '../../api/ajax/home';

// 获取专题页面第一屏展示数据

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

    getTopicList({pageIndex: offset, pageSize: 100, topicId: parseInt(location.href.split("topic/")[1])}).then(result=>{
        if(offset==1){
            let title = result.Topic["title"];
            if(title && title.length>12) title = title.substring(0, 12)+"...";
            dispatch({
                type: Types.GET_TOPIC_PAGE,
                topicPage: {title:"专题《"+title+"》", intro: result.Topic["remark"]}
            })
        }
        dispatch({
            type: Types.GET_TOPIC_TOPICS,
            hasMore: result.PicList.length<100?false:true,
            topics: result.PicList
        })
        console.log(result)
    })

    
};


