import React,{Component} from 'react';
export default class LessonList extends Component{
    render(){
       /* */
        return (
            <section section="topic-wrap">
                {this.props.lists.length>0?
                    this.props.lists.map((item,index)=>{
                        return (
                            <a className="topic-list" style={{float: (index%2==0?"left":"right")}} key={index} href="">
                                <img src="http://img18.3lian.com/d/file/201709/21/2fbe1b0b18376a1eafa817542c9d07be.jpg" />
                            </a>
                        )
                    })
                    :'正在加载'}
            </section>
        )
    }
}

//scrollTop + offsetHeight+20 > scrollHeight  加载更多