import React,{Component} from 'react';
export default class GetMobileBtn extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <span style={{fontSize: '12px'}} onClick={this.props.handleCode} className="btn btn-skin1">{(this.props.code == 1 && this.props.remainSecond>0) ? (this.props.remainSecond)+"s后重新获取" : "发送验证码"}</span>
        )
    }
}

