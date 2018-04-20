import * as types from '../action-types';
import {regAjax,loginAjax, getMobileCodeAjax} from '../../api/ajax/user';

// 注册
export const reg = (user) => (dispatch,getState)=>{
    regAjax(user).then(result=>{
      let {code,message} = result;
      dispatch({
        type:types.REG,
        payload:{code,msg: message}
      });
    }, ()=>{
      dispatch({
        type:types.REG,
        payload:{code,msg: message}
      });
    })
};
// 重置注册信息
export const resetReg = () => (dispatch,getState)=>{
    dispatch({
      type:types.REG,
      payload:{code:"",msg: ""}
    });
};

// 获取手机验证码
export const getMobileCode = (user) => (dispatch,getState)=>{
  getMobileCodeAjax(user).then(result=>{
    let remainSecond = 60;
    let {code,message} = result;
    dispatch({
      type:types.GET_MOBILE_CODE,
      payload:{code,msg: message, remainSecond: code==1?60:0}
    });
    if(code != 1) return;
    let timer = setInterval(()=>{
      remainSecond = remainSecond - 1;
      if(remainSecond < 0){
        clearInterval(timer);
        return;
      }
      dispatch({
        type:types.GET_MOBILE_CODE,
        payload:{remainSecond: remainSecond}
      });
    }, 1000)
  })
}
// 登录
export const login = (user) => (dispatch,getState)=>{
  loginAjax(user).then(result=>{
    let {code,message} = result;
    dispatch({
      type:types.LOGIN,
      payload:{code,msg: message}
    });
  }, ()=>{
    dispatch({
      type:types.LOGIN,
      payload:{code,msg: message}
    });
  })
};


