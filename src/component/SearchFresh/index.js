import React, { Component } from 'react';

var leftArr = [],rightArr=[];
leftArr.h = 0;rightArr.h=0;

var $body = document.body.clientHeight>0?document.body:document.documentElement;
var pWidth = ($body.clientWidth-4)/2;
function getSearchList(){
    return {}
}

function processData(result){
    result["r"].forEach(function(item,index){
        let _pixArr = item.pic_view_pixel.split("x")
        if(_pixArr.length == 2){
            let _w = parseFloat(_pixArr[0]), _h = parseFloat(_pixArr[1]);
            let h = _h*pWidth/_w;
            item.calculatedW = pWidth, item.calculatedH = h;
            if(leftArr.h > rightArr.h){
                rightArr.push(item)
                rightArr.h += h;
            }else{
                leftArr.push(item);
                leftArr.h += h;
            }
        }
    });
    return {leftArr, rightArr}
}
export default class MainColumns extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        leftColumn : [],
        rightColumn: []
      };
    }
    handleScroll(){
        if($body.scrollTop+$body.clientHeight+300 > $body.scrollHeight){
            let result = getSearchList();
            let r = processData(result);
            this.setState({
                leftArr: r.leftArr,
                rightArr: r.rightArr
            })
        }
    }
    componentDidMount(){
        var t = this;
        window.addEventListener('scroll', this.handleScroll.bind(t));
    }
    componentWillMount(){
        var t = this;
        // 固定一列的宽度
        let result = getSearchList();
        let r = processData(result);
        this.setState({
            leftArr: r.leftArr,
            rightArr: r.rightArr
        })
    }
    render() {
      return (
        <section>
          <div className="leftColumn" className="fl" style={{width: pWidth}}>
            <ul className="fl">
              {
                this.state.leftArr.map((item,index)=>{
                  return <li className="fl" style={{width: item.calculatedW+"px", height: item.calculatedH+"px","marginBottom":"2px"}}  key={index}><a href="/"><img style={{width: item.calculatedW+"px", height: item.calculatedH+"px"}} src={item.imgUrl} /></a></li>
                })
              }
            </ul>
          </div>
          <div className="rightColumn" className="fl" style={{width: pWidth}}>
            <ul style={{"marginLeft":"2px"}}>
              {
                this.state.rightArr.map((item,index)=>{
                    return <li className="fl" style={{width: item.calculatedW+"px", height: item.calculatedH+"px","marginBottom":"2px"}}  key={index}><a href="/"><img style={{width: item.calculatedW+"px", height: item.calculatedH+"px"}} src={item.imgUrl} /></a></li>
                })
              }
            </ul>
          </div>
          <div style={{"clear":"both"}}></div>
        </section>
      );
    }
  }
  