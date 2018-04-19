import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import Swipe from 'swipe-js-iso';
import soshm from 'soshm';
import Rem from '../../lib/rem';
import utils from '../../lib/utils';
import Alert from '../../component/Alert';
import TopHeader from '../../component/TopHeader';
import ScrollList from '../../component/ScrollList';
import SearchList from '../../component/SearchList';

import '../../styles/common.css'
import '../../styles/iconfont/iconfont.css'

import {connect} from 'react-redux';//组件链接redux
import * as action from '../../redux/actions/search';

var $body = document.body.clientHeight>0?document.body:document.documentElement;
var clientHeight = $body.clientHeight;
var mySwipe;
var urlO = utils.getUrlParam(location.href);

@connect(state=>{
  return {
    lists: state.search.lists
  }
},action)

export default class Search extends React.Component{
    constructor(props) {
      super(props);
      props.getSearchList();
      this.state = {
        urlO: urlO,
        showAlert: false,
        alertMsg: "",
        showDetail: false, // 默认不展示详细页
        showDetailInfo: false // 默认不展示详细页详细信息
      }
    }
    componentWillMount(){
      //
   }
   componentDidMount(){
      document.body.style.backgroundColor="#e9e7e4";
   }

   loadMore(){
     this.props.getSearchList();
   }
   clickFn(e){
      let pid = e.target.getAttribute("pid");
      let index = parseInt(e.target.getAttribute("index"));
      this.setState({
        clicked: true,
        showDetail: true,
        detailStartIndex: index
      });
      
   }

   reSearch(e){
      let key = e.target.getAttribute("_key");
      let val = e.target.getAttribute("_val");
      var newO = {}; newO[key] = val;
      var gos = {...urlO, ...newO};
      var goArr = [];
      for(var i in gos){
        goArr.push(i+"="+gos[i])
      }
      let q = "";
      if(goArr.length){
        q = "?"+goArr.join("&")
      }
      location.href = location.origin+"#/search"+q;
      location.reload();
   }

   closeDetail(){
      this.setState({
        showDetail: false
      });
   }
   componentDidUpdate(){
    var t = this;
    /*这里性能上可以优化，先实现效果 */
    if(this.state.clicked){
      if(mySwipe) mySwipe.kill();
      mySwipe = new Swipe(document.querySelector('#carousel'), {
        startSlide: t.state.detailStartIndex,
        continuous: false,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, elem) {},
        transitionEnd: function(index, elem) {
          if(index == t.props.lists.list.length-1){
            console.log("最后了")
          }
          t.setState({
            showDetailInfo: false
          });
        }
      });
    }
    this.state.clicked = false;
   }

   showDetailInfo(){
      this.setState({
        showDetailInfo: !this.state.showDetailInfo
      })
   }

   showShare(){
    let _t = this;
    soshm.popIn({
      title: "好不好",
      sites: ['weixin', 'weixintimeline', 'weibo', 'yixin', 'qzone', 'tqq', 'qq']
    });
  }

  downImg(){
    var t = this;
    this.setState({
      showAlert: true,
      alertMsg: "请长按屏幕保存图片"
    })
    setTimeout(()=>{
      this.setState({
        showAlert: false,
        alertMsg: ""
      })
    }, 2000)
  }

    render() {
      let {loading,hasMore} = this.props.lists;
      return (
        <section>
          {
          <section className="page-search">
              <TopHeader urlO={this.state.urlO} reSearch={this.reSearch} searchType="2" />
              {/*scrollList 要接收几个参数
                  param1:element 哪个组件需要绑定scroll事件
                  param2:loading 是否正在加载
                  param3:hasMore 是否有更多
                  param4:loadMore加载更多
              */}
              <div ref='scroll' className="search-scroll-wrap">
              <ScrollList element={this.refs.scroll}
                  loading={loading}
                  hasMore={hasMore}
                  loadMore={this.loadMore.bind(this)}
                >
                <SearchList clickFn={this.clickFn} context={this} lists={this.props.lists.list}/>
              </ScrollList>
              <div style={{textAlign: "center", padding: "15px 0", color: "#999", fontSize: "14px"}} onClick={this.loadMore.bind(this)}>正在加载更多</div>
              </div>
          </section>
          }
          {
          <section style={{display: (this.state.showDetail?"block":"none")}} className="detail-wrap">
            {
              <div onClick={this.showDetailInfo.bind(this)} className="detail-wrap" id="carousel">
              {
                   <div className='swipe-wrap'>
                    {
                      this.props.lists.list.map((item, index)=>(
                        <div className="img-outer" key={index}>
                          <div className="img-wrap" style={{height:clientHeight+"px"}}><img src={item.imgUrl} /></div>
                        </div>
                      ))
                    }
                   </div>
              }
            </div>
            }
            <div style={{display: (this.state.showDetailInfo?"block":"none")}} className="picInfo">
              <div className="pi-l">
                <p><span>标题：</span><span className="limit-w">的发放打发发发打发打发发发{}</span></p>
                <p><span>分辨率：</span>{}</p>
                <p><span>大小：{}</span></p>
                <p><span>售价：{}</span></p>
              </div>
              <div className="pi-r">
                <p><span>编号：{}</span></p>
                <p><span>像素：{}</span></p>
                <p><span>格式：{} <span>颜色模式</span>{}</span></p>
                <p><span>售价：￥{}{}</span></p>
              </div>
            </div>
            <span onClick={this.closeDetail.bind(this)} style={{left:'.3rem',top:'.2rem'}} className="font_family icon-guanbi"></span>
            <span onClick={this.showShare.bind(this)} style={{right:'.3rem',top:'.2rem'}} className="font_family icon-fenxiang"></span>
            <span style={{left:'.3rem',bottom:'.2rem'}} className="font_family icon-shoucang"></span>
            <span onClick={this.downImg.bind(this)} style={{right:'.3rem',bottom:'.2rem'}} className="font_family icon-xiazai"></span>
            <Alert isshow={this.state.showAlert} alertMsg={this.state.alertMsg} />
          </section>
          }
        </section>
      );
    }
  }
  
  