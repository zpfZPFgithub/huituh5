
//所有的home请求 都存在这里

import get from '../../index';
import urls from '../../urls';

// 注册
export function regAjax(user) {
    return get({
        type: 'post',
        url:urls.reg,
        data:user
    });
}

// 手机验证码
export function getMobileCodeAjax(user) {
    return get({
        type: 'post',
        url:urls.getMobileCode,
        data:user
    });
}

// 登录
export function loginAjax(user) {
    return get({
        type: 'post',
        url:urls.login,
        data:user
    });
}

//展示简单个人信息数据
export function getShortUserInfoAjax() {
    return get({
        url:getShortUserInfo
    });
}




