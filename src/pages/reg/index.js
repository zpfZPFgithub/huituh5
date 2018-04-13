import React, { Component } from 'react';
import Rem from '../../lib/rem';
import DetailHeader from '../../component/DetailHeader';
import '../../styles/common.css'


export default class Reg extends React.Component{
    constructor(props) {
      super(props);
    }
    componentDidMount(){
      var nc_token = ["CF_APP_1", (new Date()).getTime(), Math.random()].join(':');
      var nc=NoCaptcha.init({
        renderTo: '#nc',
        appkey: 'CF_APP_1', 
        scene: 'register',
        token: nc_token,
        trans: {"key1": "code200"},
        elementID: ["usernameID"],
        is_Opt: 0,
        language: "cn",
        timeout: 10000,
        retryTimes: 5,
        errorTimes: 5,
        inline:false,
        apimap: {
            // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
            // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
        },
        bannerHidden:false,
        initHidden:false,
        callback: function (data) {
            window.console && console.log(nc_token)
            window.console && console.log(data.csessionid)
            window.console && console.log(data.sig)
        },
        error: function (s) {
        }
    });
    NoCaptcha.setEnabled(true);
    nc.reset();//请务必确保这里调用一次reset()方法
    NoCaptcha.upLang('cn', {
        'LOADING':"加载中...",//加载
        'SLIDER_LABEL': "拖动滑块到右侧验证",//等待滑动
        'CHECK_Y':"验证通过",//通过
        'ERROR_TITLE':"非常抱歉，这出错了...",//拦截
        'CHECK_N':"验证未通过", //准备唤醒二次验证
        'OVERLAY_INFORM':"经检测你当前操作环境存在风险，请输入验证码",//二次验证
        'TIPS_TITLE':"验证码错误，请重新输入"//验证码输错时的提示
    });
    }
    render() {
      return (
        <section style={{fontSize: "14px"}}>
            <DetailHeader title="注册" />
            <div className="form-outer">
              <ul>
                <li><input type="text" placeholder="手机号码"  /></li>
                <li>
                  <div id="__nc" style={{marginLeft:"auto", "marginRight": "auto", width:"100%","height":"70px"}}>
                    <div id="nc"></div>
                  </div>
                </li>
                <li><input type="text" placeholder="验证码"  /><button>发送验证码</button></li>
                <li><input type="text" placeholder="用户名"  /></li>
                <li><input type="password" placeholder="密码"  /></li>
                <li><button className="btn login-btn">注册</button></li>
              </ul>
              <div className="rules">
                <input type="checkbox" />
                <span>阅读并同意</span>
                <a href="">《汇图网服务协议》</a>
                <a href="">《委托代收待付款协议》</a>
              </div>
            </div>
        </section>
      );
    }
  }
  
  