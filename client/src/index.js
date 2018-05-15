import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2'
import { injectGlobal } from 'styled-components'
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'
import 'font-awesome/css/font-awesome.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy');
    body{
        margin:0;
    }
`
const client = new ApolloClient({})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App2 />
    </ApolloProvider>

    , document.getElementById('root'));
registerServiceWorker();
