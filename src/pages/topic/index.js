import React, { Component } from 'react';
import Rem from '../../lib/rem';
import Ajax from '../../lib/ajax';
import urls from '../../lib/urls';
import TopHeader from '../../component/TopHeader';
import '../../styles/common.css'
import '../../styles/iconfont/iconfont.css'



export default class Topic extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        winW: document.documentElement.clientWidth
      }
    }
   componentDidMount(){
      document.body.style.backgroundColor="#e9e7e4";
   }
  
    render() {
      return (
        <section class="page-topic">
            <TopHeader bottomTitle="1" />
            <div class="intro">
            【简介】简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
            </div>
            <section className="topic-wrap">
              {
                [1,2,3,4].map((list, index)=>(
                  <a className="topic-list" style={{float: (index%2==0?"left":"right")}} key={index} href="">
                    <img src="http://img18.3lian.com/d/file/201709/21/2fbe1b0b18376a1eafa817542c9d07be.jpg" />
                  </a>
                ))
              }
            </section>
        </section>
      );
    }
  }
  
  