import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {injectGlobal} from 'styled-components'
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'
import 'font-awesome/css/font-awesome.css'


injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy');
    body{
        margin:0;
    }
`

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
