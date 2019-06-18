import React from 'react';
import TodoItem from './TodoItem';
import { toggleTodo, deleteTodo } from '../../actions/index';

const TodoList = () => {
    return (
        <div><TodoItem /></div>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

export default TodoList;