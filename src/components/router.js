import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import { playerReducer } from './reducers/player-reducer';
import { mockData } from '../utility/fakeData'

import App from '../components/app';
import PageNotFound from '../components/page-not-found';

const Router = () => { 

    return (
        <Provider store={ createStore(playerReducer, { data: mockData, currentTrack: undefined } ) }>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ App } />
                    <Route component={ PageNotFound } />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Router;