import React, { Component } from 'react';
import soshm from 'soshm';

export default class TopHeader extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    showShare(){
      let _t = this;
      soshm.popIn({
        title: _t.props.title,
        sites: ['weixin', 'weixintimeline', 'weibo', 'yixin', 'qzone', 'tqq', 'qq']
      });
    }
    
    render() {
      return (
        <section>
            <div className="topheader-top">
                <a href="/" className="font_family icon-shouye"></a>
                <div className="ipt-wrap"><input type="text" /><span className="font_family icon-sousuo btn-s"></span></div>
                <a href="/#/accounts" className="font_family icon-zhanghu"></a>
            </div>
            <div className="topheader-holder"></div>
            {
              this.props.bottomTitle=="1" ? (
                <div>
                <div className="topheader-second">
                  <h3>{this.props.title}</h3>
                  <div className="font_family icon-fenxiang" onClick={this.showShare.bind(this)}></div>
                </div>
                <div className="topheader-holder" style={{height: '.73rem'}}></div>
                </div>): null
            }
            
            
        </section>
      );
    }
  }
  