import * as types from '../action-types';
//会话
let initState = {
  msg: '',//错误消息
  code: '',//成功消息
  user:null,//如果登录成功的话，需要给此属性赋值为登录用户
}
export function user (state = initState, action) {
  switch (action.type) {
    // 注册
    case types.REG:
      return {
        ...state, ...action.payload
      };
      // 注册
    case types.LOGIN:
      return {
        ...state, ...action.payload
      };
     // 获取手机验证码
    case types.GET_MOBILE_CODE:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}