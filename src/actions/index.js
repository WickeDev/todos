import * as uuid from 'node-uuid';
import {getIsFetching} from '../reducers';

import * as api from '../api';

// noinspection JSUnusedGlobalSymbols
export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter,
    });

    return api.fetchTodos(filter)
        .then(response => {
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response,
            });
        }, error => {
            dispatch({
                type: 'FETCH_TODOS_FAILURE',
                filter,
                message: error.message || 'Something went wrong.',
            });
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
