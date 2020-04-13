import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store/'
import { Provider } from 'react-redux'

export default function Routes() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}