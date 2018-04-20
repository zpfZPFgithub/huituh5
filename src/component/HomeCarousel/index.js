import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
export default class HomeCarousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {index: 0}
  }
  render() {
      return (
        <div className="home-slider">
          {
            this.props.sliders && this.props.sliders.length>0?
          <ReactSwipe className="carousel" swipeOptions={{continuous: true,speed: 400,auto: 3000,callback:(index,item)=>{
              this.setState({index});
          }}}>
              {
                this.props.sliders && this.props.sliders.map((item, index)=>(
                  <div key={index}><a href={"#/topic/"+item.Id}><img src={item.Img} alt={item.Name} /></a></div>
                ))
              }
          </ReactSwipe> : <div style={{width:'100%', height:'2.8rem', textAlign:'center', lineHeight: '2.8rem'}}>努力加载中...</div>
          }
          <div className="dots">
              {this.props.sliders && this.props.sliders.map((item,index)=>(
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
  