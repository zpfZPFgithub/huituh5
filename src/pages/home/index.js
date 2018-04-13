import React, { Component } from 'react';
import Rem from '../../lib/rem';
import Ajax from '../../lib/ajax';
import urls from '../../lib/urls';
import TopHeader from '../../component/TopHeader';
import '../../styles/common.css'
import '../../styles/iconfont/iconfont.css'
import ReactSwipe from 'react-swipe';



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    var t = this;
    
    let rP = t.getList({
      url:urls.home_getBigPics,
      data:{type:0}
    });
    t.state = {
      rP,
      bigPicR: [],
      index: 0
    }
    
  }
  getList(options){
    return Ajax.ajax(options);
  }
  componentDidMount(){
    var t = this;
    t.state.rP.then(response=>{
      if(response.Code==1){
        t.setState({
          bigPicR: response.Result
        });
      }
    })
    setTimeout(function(){
      t.setState({
        bigPicR: [{"title":"789","TopicId":166,"OrgUrl":""},{"title":"槿","TopicId":170,"OrgUrl":"http://picn1.huitu.com/img/20161001/20161001101852019900_2.jpg"},{"title":"不出现","TopicId":173,"OrgUrl":""},{"title":"地方撒","TopicId":175,"OrgUrl":""},{"title":"几个回家反馈规划局","TopicId":162,"OrgUrl":""}]
      })
    }, 1000)
  }
  render() {
      return (
        <div className="home-slider">
          {
            this.state.bigPicR.length>0?
          <ReactSwipe className="carousel" swipeOptions={{continuous: true,speed: 400,auto: 3000,callback:(index,item)=>{
              this.setState({index});
          }}}>
              {
                this.state.bigPicR.map((item, index)=>(
                  <div key={index}><img src="http://img18.3lian.com/d/file/201709/21/2fbe1b0b18376a1eafa817542c9d07be.jpg" /></div>
                ))
              }
          </ReactSwipe> : <div style={{width:'100%', height:'2.8rem', textAlign:'center', lineHeight: '2.8rem'}}>努力加载中...</div>
          }
          <div className="dots">
              {this.state.bigPicR.map((item,index)=>(
                  <span
                      className={((index == this.state.index))?"active":''}
                      key={index}
                  >
                  </span>
              ))}
          </div>
        </div>
      );
  }
}


export default class MainColumns extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        winW: document.documentElement.clientWidth
      }
    }
   componentDidMount(){

   }
   QQOpen(){
      window.open('http://wpa.b.qq.com/cgi/wpa.php?ln=2&amp;uin=800017115', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
   }
    render() {
      return (
        <section>
            <TopHeader />
            <Carousel />
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
                  [1,2,3,4].map((list, index)=>(
                    <a style={{width: (index%2==0?(this.state.winW/2-1):(this.state.winW/2))+"px",height: (index%2==0?(this.state.winW/2-1):(this.state.winW/2))+"px",margingBottom:"1px", marginLeft:(index%2==0?"0":"1")+"px"}} key={index} className="topic" href="">
                      <img src="http://img18.3lian.com/d/file/201709/21/2fbe1b0b18376a1eafa817542c9d07be.jpg" />
                      <div className="bg"><div></div></div>
                      <div className="bg-text"><div>美女图片</div></div>
                    </a>
                  ))
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
  
  