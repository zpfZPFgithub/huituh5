import React, { Component } from 'react';
export default class Alert extends React.Component{
  constructor(props) {
    super(props);
    var t = this;
    
  }
 
  componentDidMount(){
    console.log(document.querySelector(".c-alert"));
  }
  render() {
      return (
        <div className="c-alert"><span className="txt">测试猜测是发达</span></div> 
      );
  }
}
  