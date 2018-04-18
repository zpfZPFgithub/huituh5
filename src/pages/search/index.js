import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import Swipe from 'swipe';
import Rem from '../../lib/rem';
import TopHeader from '../../component/TopHeader';
import ScrollList from '../../component/ScrollList';
import SearchList from '../../component/SearchList';

import '../../styles/common.css'
import '../../styles/iconfont/iconfont.css'

import {connect} from 'react-redux';//组件链接redux
import * as action from '../../redux/actions/search';

console.log(Swipe)
var $body = document.body.clientHeight>0?document.body:document.documentElement;
var clientHeight = $body.clientHeight;

@connect(state=>{
  return {
    lists: state.search.lists
  }
},action)


export default class Search extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    componentWillMount(){
      this.props.getSearchList();
   }
   componentDidMount(){
      document.body.style.backgroundColor="#e9e7e4";
      // 点击图片
      
   }

   loadMore(){
     this.props.getSearchList();
   }
   getDetailHeight(index){
      let item = this.props.lists.list[index];
      let h = parseFloat(item.pic_view_pixel.split("x")[1]);
      let detailHeight = h > clientHeight ? clientHeight : h;
      return detailHeight;
   }
   clickFn(e){
      let pid = e.target.getAttribute("pid");
      let index = parseInt(e.target.getAttribute("index"));
      console.log(Math.ceil(Math.random()*10))
      this.setState({
        clicked: true,
        showDetail: true,
        detailStartIndex: Math.ceil(Math.random()*10)
      });
   }
   closeDetail(){
      this.setState({
        showDetail: false
      });
   }
    render() {
      let {loading,hasMore} = this.props.lists;
      return (
        <section>
          {
          <section style={{display: this.state.showDetail?"none":"block" }} className="page-search" ref='scroll'>
              <TopHeader searchType="2" />
              {/*scrollList 要接收几个参数
                  param1:element 哪个组件需要绑定scroll事件
                  param2:loading 是否正在加载
                  param3:hasMore 是否有更多
                  param4:loadMore加载更多
              */}
              <ScrollList element={this.refs.scroll}
                  loading={loading}
                  hasMore={hasMore}
                  loadMore={this.loadMore.bind(this)}
                >
                <SearchList clickFn={this.clickFn} context={this} lists={this.props.lists.list}/>
              </ScrollList>
              <div style={{textAlign: "center", padding: "15px 0", color: "#999", fontSize: "14px"}} onClick={this.loadMore.bind(this)}>正在加载更多</div>
          </section>
          }
          {
          <section style={{display: (this.state.showDetail?"block":"none")}} className="detail-wrap">
            {
              (this.props.lists.list.length>0 && this.state.clicked) ?<div><ReactSwipe className="carousel" swipeOptions={{continuous: false,startSlide:this.state.detailStartIndex,callback:(index,item)=>{
                
              }}}>
              {
                this.props.lists.list.map((item, index)=>(
                  <div className="img-outer" style={{height:clientHeight+"px"}} key={index}><img src={item.imgUrl} /></div>
                ))
              }
            </ReactSwipe></div> : null
            }
            <span onClick={this.closeDetail.bind(this)} style={{left:'.3rem',top:'.2rem'}} className="font_family icon-guanbi"></span>
            <span style={{right:'.3rem',top:'.2rem'}} className="font_family icon-fenxiang"></span>
            <span style={{left:'.3rem',bottom:'.2rem'}} className="font_family icon-shoucang"></span>
            <span style={{right:'.3rem',bottom:'.2rem'}} className="font_family icon-xiazai"></span>
          </section>
          }
        </section>
      );
    }
  }
  
  