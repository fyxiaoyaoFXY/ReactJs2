import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';  
import {connect} from 'react-redux';
import {logFetch} from '../actions';
import About from './About'

// import {HashRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom';


function Login(props){
    function login(){
        // redux-thunk允许dispatch一个函数，
        // 在函数里可以执行异步的操作，函数的参数是dispatch
        props.dispatch(logFetch());
    }

    return(
        // <Router>
        <div className='login'>  
            <div className='title'>
                <h4>主页  /   Node.js 新手入门</h4>
                <div className='line'></div>
            </div> 
            <p>用户名：<input type="text"/></p>
            <p>密码：<input type="password"/></p>
            {/* <button onClick={()=>{window.location.hash="/about"}}>登录</button> */}

            <Link to={`/about`}>登录</Link>
            <Route path='/about' component={About}/>
        </div>
        // </Router>
    )
}
export default connect()(Login);
