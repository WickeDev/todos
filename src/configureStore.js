import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from './reducers';

const configureStore = () => {
    const middleWares = [thunk];

    // noinspection JSUnresolvedVariable, ES6ModulesDependencies
    if (process.env.NODE_ENV !== 'production') {
        middleWares.push(createLogger());
    }

    // noinspection JSUnresolvedVariable
    const devToolsExtension = window.devToolsExtension;

    return createStore(
        todoApp,
        compose(
            applyMiddleware(...middleWares),
            devToolsExtension ? devToolsExtension() : f => f
        )
    );
};

export default configureStore;
