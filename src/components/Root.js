import * as React from 'react';
const {PropTypes} = React;
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App}/>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
