import React, { Component } from 'react';
export default class Alert extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isshow: true
    }
    this.timer = null;
  }
 
  componentWillReceiveProps(nextProps){
    console.log("Alert-component:WillReceiveProps ",nextProps)
    let msg = nextProps.alertMsg || nextProps.sysMsg;
    if(msg){
      let t = this;
      if(this.timer){
        clearTimeout(this.timer)
      }
      t.setState({
        isshow: true,
        alertMsg: msg
      })
      this.timer = setTimeout(function(){
        t.setState({
          isshow: false
        })
      }, 2000)
    }
  }
  render() {
      return (
        this.state.isshow&&this.state.alertMsg?<div className="c-alert"><span className="txt">{this.state.alertMsg}</span></div> : null
      );
  }
}
  