import React, { Component } from 'react';
import Rem from '../../lib/rem';
import DetailHeader from '../../component/DetailHeader';
import GetMobileBtn from '../../component/GetMobileBtn';
import Alert from '../../component/Alert';
import {connect} from 'react-redux';
import '../../styles/common.css';
import * as action from '../../redux/actions/user';
@connect(state=>{
  return {
    getMobileCodeStatues: state.user.getMobileCodeStatues, // 获取验证码的状态
    remainSecond: state.user.remainSecond, // 获取验证码剩余的秒数
    regResultMsg: state.user.regResultMsg
  }
},action)

export default class Reg extends React.Component{
    constructor(props) {
      super(props);
      this.state = {showAlert: false};
    }
    
    componentDidMount(){
      var nc_token = ["CF_APP_1", (new Date()).getTime(), Math.random()].join(':');
      var nc=NoCaptcha.init({
          renderTo: '#nc',
          appkey: 'CF_APP_1', 
          scene: 'register',
          token: nc_token,
          trans: {"key1": "code0"},
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
    handleReg = ()=>{
      let mobile = this.mobile.value;
      let code = this.mobileCode.value;
      let nickName = this.userName.value;
      let pwd = this.password.value;
      let msg = "";
      if(!mobile || mobile.length<11) {
        msg = "请输入正确的手机号码";
      }else if(!code || code.length<5){
        msg = "请输入正确的验证码";
      }else if(!nickName){
        msg = "请输入正确的昵称";
      }else if(!pwd){
        msg = "请输入正确的密码";
      }
      if(msg){
        this.setState({
          showAlert: true,
          alertMsg: msg
        })
        setTimeout(()=>{
          this.setState({
            showAlert: false,
            alertMsg: ""
          })
        }, 2000)
      }else{
        this.props.reg({mobile, code, nickName, pwd});
      }
    }
    handleCode = ()=>{
      let mobile = this.mobile.value;
      if(!this.props.remainSecond)
        this.props.getMobileCode();
    }
    render() {
      return (
        <section style={{fontSize: "14px"}}>
            <DetailHeader title="注册" />
            <div className="form-outer">
              <ul>
                <li><input ref={input=>this.mobile=input} type="text" placeholder="手机号码"  /></li>
                <li>
                  <div id="__nc" style={{marginLeft:"auto", "marginRight": "auto", width:"100%","height":"70px"}}>
                    <div id="nc"></div>
                  </div>
                </li>
                <li className="code-li">
                  <input ref={input=>this.mobileCode=input} type="text" placeholder="验证码" />
                  {/* <span onClick={this.handleCode.bind(this)} className="btn btn-skin1">{this.props.getMobileCodeStatues == 1 ? this.state.remainSecond : "发送验证码"}</span> */}
                  <GetMobileBtn handleCode={this.handleCode.bind(this)} code={this.props.getMobileCodeStatues} remainSecond={this.props.remainSecond}/>
                </li>
                <li><input ref={input=>this.userName=input} type="text" placeholder="用户名"  /></li>
                <li><input ref={input=>this.password=input} type="password" placeholder="密码"  /></li>
                <li><button onClick={this.handleReg.bind(this)} className="btn login-btn">注册</button></li>
              </ul>
              <div className="rules">
                <input type="checkbox" />
                <span>阅读并同意</span>
                <a href="">《汇图网服务协议》</a>
                <a href="">《委托代收待付款协议》</a>
              </div>
            </div>
            <Alert isshow={this.state.showAlert || this.props.regResultMsg} alertMsg={this.state.alertMsg || this.props.regResultMsg} />
        </section>
      );
    }
  }
  
  