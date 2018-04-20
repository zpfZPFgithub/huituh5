import React, { Component } from 'react';
import Rem from '../../lib/rem';
import TopHeader from '../../component/TopHeader';
import HomeCarousel from '../../component/HomeCarousel';
import {connect} from 'react-redux';//组件链接redux
import '../../styles/common.css'
import '../../styles/iconfont/iconfont.css'
import * as action from '../../redux/actions/home';

@connect(state=>{
  console.log(state.home.sliders)
  return {
    sliders:state.home.sliders,//将轮播图中的数据 映射到sliders身上
    homeTopics: state.home.homeTopics
  }
},action)


export default class Home extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        winW: document.documentElement.clientWidth
      }
    }
   componentWillMount(){
      this.props.getSlider();
      this.props.getHomeTopics();
   }
   QQOpen(){
      window.open('http://wpa.b.qq.com/cgi/wpa.php?ln=2&amp;uin=800017115', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
   }
    render() {
      return (
        <section>
            <TopHeader />
            <HomeCarousel sliders={this.props.sliders} />
            <table className="home-intro">
            <tbody>
              <tr>
                  <td>
                    <span className="font_family icon-business"></span>
                    <p>正版商业图库</p>
                  </td>
                  <td>
                    <span className="font_family icon-reso"></span>
                    <p>海量精美资源</p>
                  </td>
                  <td>
                    <span className="font_family icon-banquanfuwu"></span>
                    <p>优质版权服务</p>
                  </td>
              </tr>
              </tbody>
            </table>
            <div className="section-line"></div>
            <section className="home-topic">
              <h3>热门专题</h3>
              <div>
                {
                  this.props.homeTopics.length ? this.props.homeTopics.map((list, index)=>(
                    <a href={"#/topic/"+list.Id} style={{width: (index%2==0?(this.state.winW/2-1):(this.state.winW/2))+"px",height: (index%2==0?(this.state.winW/2-1):(this.state.winW/2))+"px",margingBottom:"1px", marginLeft:(index%2==0?"0":"1")+"px"}} key={index} className="topic">
                      <img src={list.Img} />
                      <div className="bg"><div></div></div>
                      <div className="bg-text"><div>{list.Name}</div></div>
                    </a>
                  )):null
                }
              </div>
            </section>
            <div className="section-line"></div>
            <section className="home-bottom">
                <div className="h5pc-wrap">
                  <a href="/" className="btn"><label className="font_family icon-chuping"></label><span>触屏版</span></a>
                  <a href="http://www.huitu.com" className="btn"><label className="font_family icon-diannaoduan"></label><span>访问电脑版</span></a>
                </div>
                <p><span>联系电话：400-0017-115</span> <span>客服QQ：800017115</span></p>
                <p><span>咨询时间：8：30-17：00 </span><span className="qq-bg" alt="客服QQ: 800017115" onClick={this.QQOpen}></span></p>
            </section>
            
        </section>
      );
    }
  }
  
  