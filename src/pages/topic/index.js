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
      this.props.getTopicPage();
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
      return (
        <section className="page-topic" ref='scroll'>
            <TopHeader bottomTitle="1" title={this.props.topicPage["title"]} />
            <div className="intro">{this.props.topicPage["intro"]}</div>
            <TopicsList lists={this.props.topics.list}/>
            <button onClick={this.loadMore.bind(this)}>获取更多</button>
        </section>
      );
    }
  }
  
  