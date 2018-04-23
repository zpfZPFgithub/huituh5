import * as types from '../action-types';
//会话
let initState = {
  msg: '',//错误消息
  code: '',//成功消息
  user:null,//如果登录成功的话，需要给此属性赋值为登录用户
  favs: { //用户收藏列表
    hasMore: true,
    offset: 1,
    limit: 10,
    list: [],
    loading: false
  } 
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
    case types.GET_FAV_LIST:
      return {...state, favs:{
          ...state.favs,
          hasMore: action.hasMore,
          list:[...state.favs.list,...action.favs],
          offset: state.favs.offset+1
      }
   };
    
    default:
      return state;
  }
}