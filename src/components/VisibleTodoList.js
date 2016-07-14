import * as React from 'react';
const {Component, PropTypes} = React;
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../actions';
import {getVisibleTodos, getIsFetching} from '../reducers';
import TodoList from './TodoList';

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        const {filter} = this.props;
        if (filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter).then(() => console.log('done!'));
    }

    render() {
        const {isFetching, toggleTodo, todos} = this.props;
        if (isFetching && !todos.length) {
            return <p>Loading...</p>;
        }

        return (
            <TodoList
                todos={todos}
                onTodoClick={toggleTodo}
            />
        );
    }
}

VisibleTodoList.propTypes = {
    filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
    todos: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all';
    return {
        isFetching: getIsFetching(state, filter),
        todos: getVisibleTodos(state, filter),
        filter,
    };
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList;
