import React from 'react';
import { ItemInterface } from '../interfaces';

const ToDoItem = (props: ItemInterface) => {
  return (
    <div className="todo-item">
      <div onClick={() => props.complete(props.todo.id)}>
        {props.todo.completed ? (
          <span className="todo-item-checked">&#x2714;</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>
      <div className="todo-item-wrapper">
        {props.todo.title}
      </div>
      <div className="item-remove" onClick={() => props.remove(props.todo.id)}>
        &#x02A2F;
      </div>
    </div>
  )
}

export default ToDoItem;
