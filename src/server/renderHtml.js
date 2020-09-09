
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import routes from '../routes';
import Header from '../componets/Header'
import { Provider } from 'react-redux';
import getStore from '../store/index';

const store = getStore();

let getHtmlStr = (req,res) => {

    let hasFetchDataRoutes = routes.filter(r => matchPath(req.url,r.path));

    let promiseArr = hasFetchDataRoutes.map(route =>  {
        if(route.fetchData){
            return route.fetchData(store.dispatch)
        }
    })

    Promise.all(promiseArr).then(d => {
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
                <script>
                    window.context = {
                        STATE: ${JSON.stringify(store.getState())}
                    }
                </script>
                <script src="./client.js"></script>
            </body>
        </html>
        `)
    })

    
} 
export default getHtmlStr;