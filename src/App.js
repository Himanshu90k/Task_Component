import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import Todo from './Todo';

export const ACTIONS = {
    ADD_TASK: "add_task",
    TOGGLE_TASK: "toggle_task",
    DELETE_TASK: "delete_task"
};

const reducer = (todos, action) => {
    switch (action.actions) {
        case ACTIONS.ADD_TASK:
            return [...todos, addTask(action.payload.name)];
        case ACTIONS.TOGGLE_TASK:
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete};
                };
                return todo;
            });
        case ACTIONS.DELETE_TASK:
            return todos.filter(todo => todo.id === action.payload.id);
        default:
            return todos;
    };
};

const addTask = (name) => {
    return {id: Date.now(), complete: false, name: name};
};

const App = () => {

    const [name, setName] = useState("");

    const [todos, dispatch] = useReducer(reducer, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({actions: ACTIONS.ADD_TASK, payload: {name: name}});
        setName("");
    };

    console.log(todos);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </form>

            {
                todos.map(todo => {
                    useEffect(
                    <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                    , [todos]);
                })
            }
        </>
    );
};

export default App;