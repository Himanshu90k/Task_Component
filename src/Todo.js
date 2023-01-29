import React from 'react';
import { ACTIONS } from './App';

const Todo = ({todo, dispatch}) => {
    return (
        <div>
            <span style={{color: todo.complete ? blue : green}}>{todo.name}</span>
            <button onClick={dispatch({actions:ACTIONS.TOGGLE_TASK, payload: {id: todo.id}})}>toggle</button>
            <button onClick={dispatch({actions:ACTIONS.DELETE_TASK, payload: {id: todo.id}})}>delete</button>
        </div>
    )
}

export default Todo;