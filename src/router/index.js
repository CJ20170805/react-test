import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header/Header';
import About from '@/views/about';
import Home from '@/views/home';
import App from '../App';

class Router extends React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/header" component={Header}></Route>
          <Route exact path="/app" component={App}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default Router;