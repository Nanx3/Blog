/**
 * Created by Nanx3 on 12/3/2017.
 */
// ES6 transpiler babel
//Library
import   React from 'react';
import   ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory,hashHistory,IndexRoute } from 'react-router';

//Components
import  Post from './posts';
import  Tag from './tags';
import  Navbar from './Components/navbar'
import  Footer from './Components/footer'
import  Header from './Components/header'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

    ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Navbar}>
                <IndexRoute component={Post}/>
                <Route path="admin/post" component={Post}/>
                <Route path="admin/tag" component={Tag}/>
                <Route path="header" component={Header}/>
                <Route path="footer" component={Footer}/>
            </Route>
        </Router>
    ), document.getElementById('dashboard'));
