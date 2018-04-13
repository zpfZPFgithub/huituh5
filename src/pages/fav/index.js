import React, { Component } from 'react';
import Rem from '../../lib/rem';
import DetailHeader from '../../component/DetailHeader';
import '../../styles/common.css'


export default class Fav extends React.Component{
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        <section style={{fontSize: "14px"}}>
            <DetailHeader title="我的收藏" />
            
        </section>
      );
    }
  }
  
  