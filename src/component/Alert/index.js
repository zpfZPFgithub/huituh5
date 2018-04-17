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
        this.props.isshow?<div className="c-alert"><span className="txt">{this.props.alertMsg}</span></div> : null
      );
  }
}
  