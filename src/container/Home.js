import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';  
import All from './All';
import jinghua from './jinghua';
import share from './share'
import ask from './ask'
import money from './money'
import test from './test'
export default class home extends Component {
    render() {
        let {url}=this.props.match.url;
        return (
            <div>
                <div className="header2">
                    <div className="choose"><Link to='/home/all/1'>全部</Link></div>
                    <div className="choose"><Link to='/home/jinghua/1'>精华</Link></div>
                    <div className="choose"><Link to='/home/share/1'>分享</Link></div>
                    <div className="choose"><Link to='/home/ask/1'>问答</Link></div>
                    <div className="choose"><Link to='/home/money/1'>招聘</Link></div>
                    <div className="choose"><Link to='/home/test/1'>客户端测试</Link></div>

                </div>

                <div>
                    <Route path='/home/all/:id' component={All}/>
                    <Route path='/home/jinghua/:id' component={jinghua}/>
                    <Route path='/home/share/:id' component={share}/>
                    <Route path='/home/ask/:id' component={ask}/>
                    <Route path='/home/money/:id' component={money}/>
                    <Route path='/home/test/:id' component={test}/>

                </div>
            </div>
        )
    }
}
