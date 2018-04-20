import React, { Component } from 'react';
import Rem from '../../lib/rem';
import DetailHeader from '../../component/DetailHeader';
import Alert from '../../component/Alert';
import {connect} from 'react-redux';
import '../../styles/common.css'

import * as action from '../../redux/actions/user';
@connect(state=>{
  return {
    code: state.user.code,
    msg: state.user.msg
  }
},action)

export default class Login extends React.Component{
    constructor(props) {
      super(props);
      this.state = {showAlert: false};
    }
    handleLogin = ()=>{
      let nickName = this.nickName.value;
      let pwd = this.pwd.value;
      let msg = "";
      if(!nickName){
        msg = "请输入正确的昵称";
      }else if(!pwd){
        msg = "请输入正确的密码";
      }
      if(msg){
        this.setState({
          alertMsg: msg
        })
      }else{
        this.setState({
          alertMsg: ""
        })
        this.props.login({nickName, pwd});
      }
    }
    render() {
      return (
        <section style={{fontSize: "14px"}}>
            <DetailHeader title="登录" />
            <div className="form-outer">
              <ul>
                <li><input ref={input=>this.nickName=input} type="text" placeholder="用户名或手机号码"  /></li>
                <li><input ref={input=>this.pwd=input} type="password" placeholder="密码"  /></li>
                <li><button onClick={this.handleLogin.bind(this)} className="btn login-btn">登录</button></li>
              </ul>
              <div className="opera">
                <a href="http://">注册账号</a>  
                <a href="http://user.huitu.com/op/ForgetPassword.aspx">忘记密码</a>
              </div>
            </div>
            <Alert sysMsg={this.props.msg} alertMsg={this.state.alertMsg} />
        </section>
      );
    }
  }
  
  