import React, { Component } from 'react';
import Rem from '../../lib/rem';
import DetailHeader from '../../component/DetailHeader';
import '../../styles/common.css'


export default class MainColumns extends React.Component{
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        <section style={{fontSize: "14px"}}>
            <DetailHeader title="登录" />
            <div className="form-outer">
              <ul>
                <li><input type="text" placeholder="用户名或手机号码"  /></li>
                <li><input type="password" placeholder="密码"  /></li>
                <li><button className="btn login-btn">登录</button></li>
              </ul>
              <div className="opera">
                <a href="http://">注册账号</a>  
                <a href="http://user.huitu.com/op/ForgetPassword.aspx">忘记密码</a>
              </div>
            </div>
        </section>
      );
    }
  }
  
  