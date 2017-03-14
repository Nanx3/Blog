/**
 * Created by Nanx3 on 13/3/2017.
 */
// ES6 transpiler babel
//Library
import   React from 'react';
import   ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory,hashHistory,IndexRoute } from 'react-router';

//Components
import  Public from './public';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={Public}/>
            <Route path="public" component={Public}/>
        </Route>
    </Router>
), document.getElementById('public'));
