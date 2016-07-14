import * as uuid from 'node-uuid';
import {getIsFetching} from '../reducers';

import * as api from '../api';

const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter,
});

const receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response,
});

// noinspection JSUnusedGlobalSymbols
export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch(requestTodos(filter));

    return api.fetchTodos(filter).then(response => {
        dispatch(receiveTodos(filter, response));
    });
};

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: uuid.v4(),
    text,
});

// noinspection JSUnusedGlobalSymbols
export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
});
