import React, { Component } from 'react';
import Rem from '../../lib/rem';
import utils from '../../lib/utils';
import TopHeader from '../../component/TopHeader';
import '../../styles/common.css'


export default class Fav extends React.Component{
    constructor(props) {
      super(props);
      document.body.style.backgroundColor="#E9E7E3";
      let uInfo = utils.cookie("userId");
      if(!uInfo) location.href = "#/login";
      this.state = {
        userId: uInfo.split("|")[0]
      }
    }
   
    render() {
      return (
        <section className="page-accounts" style={{fontSize: "14px"}}>
            <TopHeader/>
            <section className="uinfo">
              <img src={"http://show.huitu.com/avatar/"+(1248)+".gif"} />
              <h5>晓舟</h5>
              <p>余额：245.00</p>
            </section>
            <section className="ub">
              <a href="" className="ufav"><span className="font_family icon-yishoucang"></span><label>我的收藏</label></a>  
              <div className="more">
                <p>更多功能请下载手机汇图APP或登录电脑版使用</p>
              </div>
              <div className="h5pc-wrap">
                  <a href="/" className="btn aOn"><label className="font_family icon-chuping"></label><span>触屏版</span></a>
                  <a href="http://www.huitu.com" className="btn aOn"><label className="font_family icon-diannaoduan"></label><span>访问电脑版</span></a>
              </div>
              <span className="login-out">退出登录</span>
            </section>
        </section>
      );
    }
  }
  
  