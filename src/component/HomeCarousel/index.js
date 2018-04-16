import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import get from '../../../src/api';
import urls from '../../../src/api/urls'
export default class HomeCarousel extends React.Component{
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
    return get(options);
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
  