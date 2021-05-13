import React, { ReactElement,FC } from 'react';
import TodoListItem from './TodoListItem';
export type  ITodos={
    todos:Todo[];
}

export type Todo ={
    text:String
}

const Todos:FC<ITodos> = ({todos}) =>(
    <div className = "list-wrapper">
        {
            todos.map(todo=> <TodoListItem todo={todo}/>)
        }
    </div>

);

export default Todos;
