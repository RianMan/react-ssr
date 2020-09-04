
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {  Route } from 'react-router-dom';
import routes from '../routes';
import Header from '../componets/Header'
import { Provider } from 'react-redux';
import getStore from '../store/index';

const context = {}
const store = getStore();

let getHtmlStr = (req,res) => {

    let hasFetchDataRoutes = routes.filter(r => r.fetchData);

    let promiseArr = hasFetchDataRoutes.map(route =>  route.fetchData(store.dispatch) )

    Promise.all(promiseArr).then(d => {
        console.log(d,'d');
    })

    let HomeStr = renderToString(<Provider store={store}>
        <StaticRouter location={req.url} context={{name:'react ssr'}}>
            <Header />
            {
                routes.map(route => <Route exact {...route} />)
            }
        </StaticRouter>
    </Provider>);
    res.send(`
    <html>
        <head>
            <title> react ssr</title>
        </head>
        <body>
            <div id="root">${HomeStr}</div>
            <script src="./client.js"></script>
        </body>
    </html>
    `)
} 
export default getHtmlStr;