import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import routes from '../routes';
import Header from '../componets/Header'


ReactDom.render(
<Provider store={store}>
    <BrowserRouter>
        <Header />
        {routes.map(route => <Route exact {...route} />)}
    </BrowserRouter>
</Provider>
,document.getElementById('root'))

