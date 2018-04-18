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
            {
              this.props.searchType ? (
                <div>
                  <div style={{top: ".9rem"}} className="search-type">普通作品</div>
                  <div className="topheader-holder" style={{height: '.73rem'}}></div>
                </div>
              ) : null
            }
            {
              this.props.searchType == 2 ? (
                <div>
                  <div style={{top: "1.63rem", "marginTop": "1px"}} className="search-bar">
                    <div className="search-bar-item">综合排序</div>
                    <div className="search-bar-item search-bar-item-on">全部作品</div>
                    <div className="search-bar-item">设计</div>
                    <div className="search-bar-item">摄影</div>
                  </div>
                  <div className="topheader-holder" style={{height: '.73rem'}}></div>
                </div>
              ) : null
            }
            
            
        </section>
      );
    }
  }
  