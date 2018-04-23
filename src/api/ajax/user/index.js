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

// 收藏数据
export function getFavsAjax(data) {
    return get({
        data:data,
        url:urls.getFavs
    });
}




