import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//HashRouter 通过路径 里的哈希变量实现的
//BrowserRouter  用的是 html5的history API实现 
import {HashRouter as Router,Route,Switch, Redirect, Link} from 'react-router-dom';
import Home from './pages/home'
import Topic from './pages/topic'
import Login from './pages/login'
import Reg from './pages/reg'
import Search from './pages/search'
import Fav from './pages/fav'
import Detail from './pages/detail'
import Accounts from './pages/accounts'
import App from "./App";
/**
 * Router是路由容器
 * Route代表一条的路由规则
 */


//引用store
import {Provider} from 'react-redux';
import store from  './redux/store';
window._store = store; 
ReactDOM.render(
    <Provider store={store}>
        <Router>
    <Switch>
    <Route path="/home" exact component={Home}/>
     <Route path="/search" component={Search}/>
     <Route path="/login" component={Login}/>
     <Route path="/reg" component={Reg}/>
     <Route path="/topic/:id" component={Topic}/>
     <Route path="/fav" component={Fav}/>
     <Route path="/detail" component={Detail}/>
     <Route path="/accounts" component={Accounts}/>
     <Redirect to="/home"/>
    </Switch>
  </Router>
    </Provider>,
    document.querySelector('#app')
);
