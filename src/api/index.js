import * as uuid from 'node-uuid';

const fakeDatabase = {
    todos: [{
        id: uuid.v4(),
        text: 'hey',
        completed: true,
    }, {
        id: uuid.v4(),
        text: 'ho',
        completed: true,
    }, {
        id: uuid.v4(),
        text: 'let\'s go',
        completed: false,
    }],
};

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
    delay(500).then(() => {
        switch (filter) {
            case 'all':
                return fakeDatabase.todos;
            case 'active':
                return fakeDatabase.todos.filter(t => !t.completed);
            case 'completed':
                return fakeDatabase.todos.filter(t => t.completed);
            default:
                throw new Error(`UnKnown filter: ${filter}`);
        }
    });
