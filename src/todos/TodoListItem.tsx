import React, { FC } from 'react';
import { Todo } from './todos';

type ITodoListItem = {
    todo:Todo;
}
const TodoListItem:FC<ITodoListItem> = ({todo})=>(
    <div>
        <h1>{todo.text}</h1>
        <div className="buttonsContainer">
        <button className="CompletedButton">Mark as Completed</button>
        <button className="RemoveButton">Remove</button>
        </div>
    </div>
);


export default TodoListItem;