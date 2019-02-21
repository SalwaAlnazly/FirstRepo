import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login';
import Register from './components/register'
import Messages from './components/messages'
// import store from 'store'
// Routing
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <div className='page-body main-container'>
                    <Route path="/" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/messages" exact component={Messages} />
                </div>

            </Switch>
        </BrowserRouter>,
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

