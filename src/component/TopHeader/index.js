import React, { Component } from 'react';
import soshm from 'soshm';
export default class TopHeader extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        showPicTypeSelect: false,
        showSortSelect: false
      };
    }
    showShare(){
      let _t = this;
      soshm.popIn({
        title: _t.props.title,
        sites: ['weixin', 'weixintimeline', 'weibo', 'yixin', 'qzone', 'tqq', 'qq']
      });
    }
    showPicTypeSelect(){
      this.setState({
        showPicTypeSelect: !this.state.showPicTypeSelect
      })
    }
    showSortSelect(){
      this.setState({
        showSortSelect: !this.state.showSortSelect
      })
    }
    render() {
      if(this.props.searchType && this.props.urlO){
        var sortName="综合排序";
        var pictypeName="普通作品";
        if(this.props.urlO.or=="6") sortName="官方推荐"
        if(this.props.urlO.or=="2") sortName="最新上传"
        if(this.props.urlO.or=="3") sortName="价格最低"
        if(this.props.urlO.or=="0") sortName="下载最多"
        if(this.props.urlO.st=="2") pictypeName="新媒体作品"
      }
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
                  <div onClick={this.showPicTypeSelect.bind(this)} style={{top: ".9rem"}} className="search-type">{pictypeName}<span className="triangle"></span></div>
                  <div className="topheader-holder" style={{height: '.73rem'}}></div>
                </div>
              ) : null
            }
            {
              this.props.searchType == 2 ? (
                <div>
                  <div style={{top: "1.63rem", "marginTop": "1px"}} className="search-bar">
                    <div onClick={this.showSortSelect.bind(this)} className="search-bar-item">{sortName}<span className="triangle"></span></div>
                    <div _key="s1" _val="" className={this.props.urlO.s1!="1"&&this.props.urlO.s1!="2"?"search-bar-item search-bar-item-on":"search-bar-item"}>全部作品</div>
                    <div onClick={this.props.reSearch} _key="s1" _val="2" className={this.props.urlO.s1!="2"?"search-bar-item":"search-bar-item search-bar-item-on"}>设计</div>
                    <div onClick={this.props.reSearch} _key="s1" _val="1" className={this.props.urlO.s1!="1"?"search-bar-item":"search-bar-item search-bar-item-on"}>摄影</div>
                  </div>
                  <div className="topheader-holder" style={{height: '.73rem'}}></div>
                </div>
              ) : null
            }
            <div style={{display: (this.state.showPicTypeSelect?"block":"none")}} className="search-select" onClick={this.props.reSearch}>
                <div _key="st" _val="1"  className="select-list">普通作品</div>
                <div _key="st" _val="2" className="select-list">新媒体作品</div>
            </div>
            <div style={{display: (this.state.showSortSelect?"block":"none")}} className="search-select search-select-1" onClick={this.props.reSearch}>
                <div _key="or" _val="6" className="select-list">官方推荐</div>
                <div _key="or" _val="2" className="select-list">最新上传</div>
                <div _key="or" _val="3" className="select-list">价格最低</div>
                <div _key="or" _val="0" className="select-list">下载最多</div>
                <div _key="or" _val="" className="select-list">综合排序</div>
            </div>
        </section>
      );
    }
  }
  