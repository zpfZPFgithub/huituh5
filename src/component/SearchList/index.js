import React,{Component} from 'react';
import {Link} from 'react-router-dom'

var $body = document.body.clientHeight>0?document.body:document.documentElement;
var pWidth = ($body.clientWidth-4)/2;
let leftArr = [],rightArr = [];
leftArr.h = 0;rightArr.h=0;

function processData(result){
    leftArr = [],rightArr = [];
    leftArr.h = 0;rightArr.h=0;
    result.lists.forEach(function(item,index){
        let _pixArr = item.pic_view_pixel.split("x")
        if(_pixArr.length == 2){
            let _w = parseFloat(_pixArr[0]), _h = parseFloat(_pixArr[1]);
            let h = _h*pWidth/_w;
            item.calculatedW = pWidth, item.calculatedH = h;
            item.index = index;
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
export default class LessonList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            leftColumn : [],
            rightColumn: []
        };
    }
    componentWillMount(){
      
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.lists.length != nextProps.lists.length){
            return true;
        }
        return false; //子组件判断接收的属性 是否满足更新条件 为true则更新
    }
    
    componentWillReceiveProps(nextProps){
        let r = processData(nextProps);
        this.setState({
            leftArr: r.leftArr,
            rightArr: r.rightArr
        })
    }
    render(){
       /* */
        return (
            <section style={{paddingTop: '6px'}}>
                <div className="leftColumn" className="fl" style={{width: pWidth}}>
                    <ul className="fl">
                    {
                        this.state.leftArr ? this.state.leftArr.map((item,index)=>{
                        return <li pid={item.pId} index={item.index}  onClick={this.props.clickFn.bind(this.props.context)} className="fl" style={{width: item.calculatedW+"px", height: item.calculatedH+"px","marginBottom":"2px"}}  key={index}>
                                    <img pid={item.pId} index={item.index} style={{width: item.calculatedW+"px", height: item.calculatedH+"px"}} src={item.imgUrl} />
                                </li>
                        }):null
                    }
                    </ul>
                </div>
                <div className="rightColumn" className="fl" style={{width: pWidth}}>
                    <ul style={{"marginLeft":"2px"}}>
                    {
                        this.state.rightArr ? this.state.rightArr.map((item,index)=>{
                            return <li pid={item.pId} index={item.index} onClick={this.props.clickFn.bind(this.props.context)} className="fl" style={{width: item.calculatedW+"px", height: item.calculatedH+"px","marginBottom":"2px"}}  key={index}>
                                <img pid={item.pId} index={item.index} style={{width: item.calculatedW+"px", height: item.calculatedH+"px"}} src={item.imgUrl} />
                                </li>
                        }) : null
                    }
                    </ul>
                </div>
                <div style={{"clear":"both"}}></div>
                </section>
        )
    }
}

//scrollTop + offsetHeight+20 > scrollHeight  加载更多