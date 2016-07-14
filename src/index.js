import 'babel-polyfill';
import 'eventsource-polyfill';
import 'html5-history-api';

import * as React from 'react';
import {render} from 'react-dom';

import configureStore from './configureStore';
import Root from './components/Root';
import {fetchTodos} from './api';

fetchTodos('all').then(todos =>
    console.info(todos)
);

const store = configureStore();

render(
    <Root store={store}/>,
    document.getElementById('root')
);
