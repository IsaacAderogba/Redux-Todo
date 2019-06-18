import React from 'react';
import TodoItem from './TodoItem';
import { addTodo, toggleTodo, deleteTodo } from '../../actions/index';

const TodoList = () => {
    return (
        <div><TodoItem /></div>
    )
}

export default TodoList;