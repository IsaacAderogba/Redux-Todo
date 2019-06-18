import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { toggleTodo, deleteTodo } from '../../actions/index';

const TodoList = (props) => {
    console.log(props);
    return (
        <div><TodoItem /></div>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps)(TodoList);