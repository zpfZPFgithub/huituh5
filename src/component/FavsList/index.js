import React,{Component} from 'react';
export default class FavsList extends Component{
    render(){
       /* */
        return (
            <section section="fav-wrap">
                {this.props.lists.length>0?
                    this.props.lists.map((item,index)=>{
                        return (
                            <div className="piclist-item-wrap"  key={index} >
                                <a className="piclist-item"href="">
                                    <img src="http://img18.3lian.com/d/file/201709/21/2fbe1b0b18376a1eafa817542c9d07be.jpg" />
                                </a>
                                <span className="btn btn-skin2">删除</span>
                            </div>
                        )
                    })
                    :null}
            </section>
        )
    }
}

//scrollTop + offsetHeight+20 > scrollHeight  加载更多