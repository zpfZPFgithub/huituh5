import React, { Component } from 'react';
import Rem from '../../lib/rem';
import TopHeader from '../../component/TopHeader';
import ScrollList from '../../component/ScrollList';
import TopicsList from '../../component/TopicsList';

import '../../styles/common.css'
import '../../styles/iconfont/iconfont.css'

import {connect} from 'react-redux';//组件链接redux
import * as action from '../../redux/actions/topic';


@connect(state=>{
  return {
    topicPage:state.topic.topicPage,//将轮播图中的数据 映射到sliders身上
    topics: state.topic.topics
  }
},action)

export default class Topic extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        winW: document.documentElement.clientWidth
      }
    }
    componentWillMount(){
      this.props.getTopicTopics();
   }
   componentDidMount(){
      document.body.style.backgroundColor="#e9e7e4";
      let {match} = this.props;
      //console.log(match.params.id); 专辑id
   }

   loadMore(){
     this.props.getTopicTopics();
   }
  
    render() {
      let {loading,hasMore} = this.props.topics;
      return (
        <section className="page-topic">
            <TopHeader bottomTitle="1" title={this.props.topicPage["title"]} />
            <div className="topics-wrap"  ref='scroll'>
              <div className="intro">{this.props.topicPage["intro"]}</div>
              {/*scrollList 要接收几个参数
                  param1:element 哪个组件需要绑定scroll事件
                  param2:loading 是否正在加载
                  param3:hasMore 是否有更多
                  param4:loadMore加载更多
              */}
              <ScrollList 
                  element={this.refs.scroll}
                  holderHeight="2.2"
                  loading={loading}
                  hasMore={hasMore}
                  loadMore={this.loadMore.bind(this)}
                >
              <TopicsList lists={this.props.topics.list}/>
              </ScrollList>
            </div>
        </section>
      );
    }
  }
  
  