import React, { Component } from 'react'

export default class page extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
        
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        console.log(this.props);
        fetch('https://cnodejs.org/api/v1/topic/?id='+page)
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
            fetch('https://cnodejs.org/api/v1/topic/?id='+page)
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
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div className="word" style={{overflow:'hidden'}} key={item.id}>
                            <p><img src={item.author.avatar_url}/>{item.reply_count}/{item.visit_count}
                            <button style={{width:45,height:25,'background-color':'green'}}>精华</button>
                             <span onClick={()=>{window.location.href="locallhost:3000/page"}} style={{'font-weight':'bold','font-size':'15px'}}>{item.title}</span>
                             <span style={{float:'right'}}>3天前</span>
                              </p> 

                        </div>
                    ))
                }
            </div>
        )
    }
}
