import React,{Component} from 'react';
export default class LessonList extends Component{
    render(){
       /* */
        return (
            <section className="topic-wrap">
                {this.props.lists.length>0?
                    this.props.lists.map((item,index)=>{
                        return (
                            <a className="topic-list piclist-item" style={{float: (index%2==0?"left":"right")}} key={index} href="">
                                <img src={item.Img} />
                            </a>
                        )
                    })
                    :null}
            </section>
        )
    }
}

//scrollTop + offsetHeight+20 > scrollHeight  加载更多