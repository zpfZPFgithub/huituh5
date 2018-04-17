import React, { Component } from 'react';

import ReactSwipe from 'react-swipe';

import {connect} from 'react-redux';//组件链接redux
import '../../styles/common.css'
import * as action from '../../redux/actions/home';


@connect(state=>{
  return {
  }
},action)


export default class Detail extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        pics: ["http://img06.tooopen.com/images/20160918/tooopen_sy_179058635779.jpg", "http://img18.3lian.com/d/file/201709/21/2fbe1b0b18376a1eafa817542c9d07be.jpg", "http://img06.tooopen.com/images/20160918/tooopen_sy_179058635779.jpg"]
      }
    }
   componentWillMount(){
      //this.props.getSlider();
   }
   componentDidMount(){
   
   }
    render() {
      return (
        <section className="detail-wrap">
        
        <ReactSwipe className="carousel" swipeOptions={{continuous: false,startSlide:1,callback:(index,item)=>{
              this.setState({pics: ["http://img06.tooopen.com/images/20160918/tooopen_sy_179058635779.jpg", "http://img18.3lian.com/d/file/201709/21/2fbe1b0b18376a1eafa817542c9d07be.jpg", "http://img06.tooopen.com/images/20160918/tooopen_sy_179058635779.jpg"]});
             
          }}}>
              {
                this.state.pics.map((item, index)=>(
                  <div key={index}><img src={item} /></div>
                ))
              }
          </ReactSwipe>

        </section>
      );
    }
  }
  
  