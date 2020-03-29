import React from 'react';
import { ItemInterface } from '../interfaces';
import PropTypes from 'prop-types';

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
      <button onClick={props.inputText.length ? () => props.update(props.todo.id) : () => alert('Enter text')}>update</button>
      <div className="item-remove" onClick={() => props.remove(props.todo.id)}>
        &#x02A2F;
      </div>
    </div>
  )
}

ToDoItem.propTypes = {
  complete: PropTypes.func,
  todo: PropTypes.object,
  update: PropTypes.func,
  remove: PropTypes.func,
  inputText: PropTypes.string,
}

export default ToDoItem;
