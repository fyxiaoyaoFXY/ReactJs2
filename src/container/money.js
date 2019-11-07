import React from 'react';
import {Link,Route,NavLink} from 'react-router-dom';  
import id from './id'

// 无状态组件
export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
        
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        console.log(this.props);
        fetch('https://cnodejs.org/api/v1/topics?tab=job&&page'+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?tab=job&&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res.data)
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render(){
        var list=[1,2,3,4,5,6,7,8,9,10];
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div className="word" style={{overflow:'hidden'}} key={item.id}>
                            <Link to={`/id`}><p ><img src={item.author.avatar_url}/>{item.reply_count}/{item.visit_count}
                            <button onClick={()=>{window.location.href="localhost:3000/id"}} style={{width:45,height:25,'background-color':'grey'}}>精华</button>
                             <span style={{'font-weight':'bold','font-size':'15px'}}>{item.title}</span>
                             <span style={{float:'right'}}>3天前</span>
                            </p> </Link>

                        </div>
                    ))
                }
                <div>
                    {
                        list.map((item)=>(
                            <div key={item} style={{float:'left',width:'30px',height:'30px',border:'1px #ddd solid',padding:'4px',textAlign:'center',backgroundColor:'transparent'}}>
                                <NavLink activeStyle={{'background-color':'grey',color:'#fff'}} 
                                to={'/home/all/'+item}>{item}</NavLink>
                            </div>
                        ))

                    }
                </div>
            </div>
        )
    }
}

