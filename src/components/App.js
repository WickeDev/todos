import * as React from 'react';
import Footer from './Footer';
import ReduxAddTodo from './AddTodo';
import ReduxVisibleTodoList from './VisibleTodoList';

const App = () => (
    <div>
        <ReduxAddTodo/>
        <ReduxVisibleTodoList/>
        <Footer/>
    </div>
);

export default App;
