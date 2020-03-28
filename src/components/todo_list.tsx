import React from 'react';
import ToDoItem from './todo_item';
import { ListInterface } from '../interfaces';

const ToDoList = (props: ListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((el) => (
          <li key={el.id}>
            <ToDoItem 
              todo={el}
              complete={props.complete}
              remove={props.remove}
              update={props.update}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList;
