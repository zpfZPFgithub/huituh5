import React, { Component } from 'react';
import Rem from '../../lib/rem';
import SearchFresh from '../../component/SearchFresh';
import { RefreshControl, ListView } from 'antd-mobile';
import '../../styles/common.css'


export default class MainColumns extends React.Component{
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        <section>
            <SearchFresh requrl="http://xxx" />
        </section>
      );
    }
  }
  
  