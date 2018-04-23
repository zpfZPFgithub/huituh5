
//所有的home请求 都存在这里

import get from '../../index';
import urls from '../../urls';

// 首页轮播图
export function getSliders() {
    return get({
        url:urls.home_getBigPics,
        data:{type:0}
    });
}
// 首页推荐专题
export function getTopic() {
    return get({
        url:urls.home_getBigPics,
        data:{type:1}
    });
}

// 专题列表页专题
export function getTopicList(data) {
    return get({
        url:urls.getTopicList,
        data:data
    });
}




