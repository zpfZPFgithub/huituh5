/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import * as types from '../action-types';
import {regAjax,loginAjax, getMobileCodeAjax} from '../../api/ajax/user';

// 注册
export const reg = (user) => (dispatch,getState)=>{
    regAjax(user).then(result=>{
      console.log(result);
      let {code,success,error} = result;
      dispatch({
        type:types.REG,
        payload:{success,error}
      });
      if(code == 0){//code=0表示成功 成功后跳到登录页
        //dispatch(push('/login'));
        history.push('/login');
      }
    }, ()=>{
      dispatch({
        type:types.REG,
        payload:{regResultMsg: "系统错误，请稍后再试"}
      });
    })
};

// 获取手机验证码
export const getMobileCode = (user) => (dispatch,getState)=>{
  /*
  getMobileCodeAjax(user).then(result=>{
    let {code,success,error} = result;
    dispatch({
      type:types.GET_MOBILE_CODE,
      payload:{}
    });
    if(code == 0){//code=0表示成功 成功后跳到登录页
      //dispatch(push('/login'));
      history.push('/login');
    }
  })
  */
  
  setTimeout(function(){
    let remainSecond = 60;
    dispatch({
      type:types.GET_MOBILE_CODE,
      payload:{getMobileCodeStatues: 1, remainSecond: 60}
    });
    let timer = setInterval(()=>{
      remainSecond = remainSecond - 1;
      if(remainSecond < 0){
        clearInterval(timer);
        return;
      }
      dispatch({
        type:types.GET_MOBILE_CODE,
        payload:{getMobileCodeStatues: 1, remainSecond: remainSecond}
      });
    }, 1000)
  }, 300)

};