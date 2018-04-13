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
/**
 * Router是路由容器
 * Route代表一条的路由规则
 */
const  NoMatch = () => (
    <div>
        <h3>404</h3>
    </div>
)

/*

<Router history={history}>
                <Switch>
                    <Route path='/'>
                        <App>
                            <Switch>
                                <Route exact path='/' component={Login}/>
                                <Route path='/home'>
                                    <Home>
                                        <Switch>
                                            <Route exact path='/home' component={Admin}/>
                                            <Route path='/home/order' component={Order}/>
                                            <Redirect to='/home'/>
                                        </Switch>
                                    </Home>
                                </Route>
                                <Redirect to='/' />
                            </Switch>
                        </App>
                    </Route>
                </Switch>
            </Router>  


            <Router history={createHistory()}>
         <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/home" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route component={NoMatch}/>
         </Switch>
       </Router>
*/
ReactDOM.render(
    <Router>
    <Switch>
    <Route path="/home" exact component={Home}/>
     <Route path="/search" component={Search}/>
     <Route path="/login" component={Login}/>
     <Route path="/reg" component={Reg}/>
     <Route path="/topic" component={Topic}/>
     <Route path="/fav" component={Fav}/>
     <Redirect to="/home"/>
    </Switch>
  </Router>,
    document.querySelector('#app')
);
