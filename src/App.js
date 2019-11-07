import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './container/Home'
import Api from './container/Api'
import About from './container/About'
import Start from './container/Start'
import Login from './container/Login'
import store from './store';



export default class App extends Component {
    render() {
        return (
            <Provider store={store}>

            <Router>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div >
                        <div className="left">
                            <Route path='/home' component={Home}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route path='/login' component={Login}/>

                        </div>
                    </div>
                    <div className="right">
                        <h3>CNode：Node.js专业中文社区</h3>
                        <p>您可以 登录 或 注册 , 也可以</p>
                        <button>通过GitHub登录</button>
                        <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""/>
                        <img src='https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS'/>
                        <img src='https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-'/>
                        <div className='head'>
                            友情社区
                        </div>
                        <div className='headimg'>
                            <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=""/>
                            <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt=""/>
                            <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt=""/>
                            <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt=""/>
                        </div>
                        <div className='head'>
                            客户端二维码
                        </div>
                        <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                    </div>
                    {/* <div className='right'>
                        <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""/>
                        <img src='https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS'/>
                        <img src='https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-'/>
                        <div className='head'>
                            友情社区
                        </div>
                        <div className='headimg'>
                            <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=""/>
                            <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt=""/>
                            <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt=""/>
                            <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt=""/>
                        </div>
                        <div className='head'>
                            客户端二维码
                        </div>
                        <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                    </div> */}
                    {/* <div className='right'>
                        <div className='head'>
                            友情社区
                        </div>
                        <div className='headimg'>
                            <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=""/>
                            <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt=""/>
                            <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt=""/>
                            <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt=""/>
                        </div>
                    </div> */}
                    {/* <div className='right'>
                        <div className='head'>
                            客户端二维码
                        </div>
                        <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                    </div> */}
                </div>
                <div className='bottom'>
                    <div className='bottombody'>
                        <h4>RSS | 源码地址</h4>
                        <h4>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</h4>
                        <p>服务器赞助商为</p>
                        <img src='https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9'/>
                        <p>,存储赞助商为</p>
                        <img src='https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX'/>
                        <p>,由</p>
                        <img src='https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD'/>
                        <p>提供应用性能服务。</p>
                        <h4>新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)</h4>
                    </div>
                </div>
            </Router>
            </Provider>
        )
    }
}
