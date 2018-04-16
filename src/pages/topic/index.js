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
      console.log(this.props.topicPage)
   }
   componentDidMount(){
      document.body.style.backgroundColor="#e9e7e4";
      let {match} = this.props;
      //console.log(match.params.id); 专辑id
   }
  
    render() {
      return (
        <section className="page-topic" ref='scroll'>
            <TopHeader bottomTitle="1" title={this.props.topicPage["title"]} />
            <div className="intro">{this.props.topicPage["intro"]}</div>
            
            <ScrollList element={this.refs.scroll}
                loading={loading}
                hasMore={hasMore}
                loadMore={this.loadMore.bind(this)}>
            <LessonList lists={this.props.lessons.list}/>
            </ScrollList>
        </section>
        
      );
    }
  }
  
  