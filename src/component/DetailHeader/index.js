import React, { Component } from 'react';

export default class DetailHeader extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    componentWillMount(){
      document.body.style.backgroundColor="#e9e7e4";
    }
    render() {
      return (
        <section>
            <div className="detailheader-top">
              <span className='font_family icon-fanhui'></span>
              <span className='title'>{this.props.title}</span>
            </div>
            <div className="detailheader-holder"></div>
        </section>
      );
    }
  }
  