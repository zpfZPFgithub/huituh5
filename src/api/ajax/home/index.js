
//所有的home请求 都存在这里

import get from '../../index';
import urls from '../../urls';

export function getSliders() {
    return get({
        url:urls.home_getBigPics,
        data:{type:0}
    });
}
export function getTopic() {
    return get({
        url:urls.home_getBigPics,
        data:{type:1}
    });
}




