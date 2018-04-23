import React,{Component} from 'react';
var $body = document.body.clientHeight>0?document.body:document.documentElement;
export default class ScrollList extends Component{
    constructor(){
        super();
        this.state = {isBindEvent:false}
    }
    bindScroll(e){
        //节流
        var t = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            let {scrollTop,scrollHeight,offsetHeight} = e.target;
            let {loading,hasMore,loadMore} = this.props;
            //console.log(scrollTop, offsetHeight, scrollHeight);
            if((scrollTop+offsetHeight+20>scrollHeight)&&!loading&&hasMore){
                loadMore();
            }
        },20)
    }
    componentWillReceiveProps(nextProps){
        //当父组件dom 已经生成后 子组件可以接收到新的属性 element,可以给element绑定事件了
        if(nextProps.element&&!this.state.isBindEvent){
            console.log(nextProps.element)
            nextProps.element.addEventListener('scroll',this.bindScroll.bind(this),false);
            this.setState({
                isBindEvent:true
            });
        }
    }
    render(){
        return (
            <div className="scroll-wrap">
                {this.props.children}
                <div>
                    <div className="list-loading-more">{this.props.hasMore?"正在加载更多":""}</div>
                    <div style={{height:this.props.holderHeight+"rem", float:"left"}}></div>
                </div>
            </div>
        )
    }
}