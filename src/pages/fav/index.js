import React, { Component } from 'react';
import Rem from '../../lib/rem';
import DetailHeader from '../../component/DetailHeader';
import ScrollList from '../../component/ScrollList';
import FavsList from '../../component/FavsList';

import '../../styles/common.css'
import '../../styles/iconfont/iconfont.css'

import {connect} from 'react-redux';//组件链接redux
import * as action from '../../redux/actions/user';

@connect(state=>{
  return {
    favs: state.user.favs
  }
},action)


export default class Fav extends React.Component{
    constructor(props) {
      super(props);
    }
    componentWillMount(){
      this.props.getFavs();
   }
    loadMore(){
      this.props.getFavs();
    }
    render() {
      let {loading,hasMore} = this.props.favs;
      return (
        <section className="page-favs" style={{fontSize: "14px"}}>
            <DetailHeader title="我的收藏" />
            <div className="favs-wrap"  ref='scroll'>
              <ScrollList
                  element={this.refs.scroll}
                  loading={loading}
                  hasMore={hasMore}
                  loadMore={this.loadMore.bind(this)}
                  holderHeight="1.8"
                >
              <FavsList lists={this.props.favs.list}/>
              </ScrollList>
            </div>
        </section>
      );
    }
  }
  
  