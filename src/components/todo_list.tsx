import React from 'react';
import ToDoItem from './todo_item';
import { ListInterface } from '../interfaces';
import PropTypes from 'prop-types';

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
              inputText={props.inputText}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

ToDoList.propTypes = {
  complete: PropTypes.func,
  remove: PropTypes.func,
  update: PropTypes.func,
  todos: PropTypes.array,
  inputText: PropTypes.string,
}

export default ToDoList;
