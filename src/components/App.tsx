import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import fetch from 'cross-fetch';
import '../styles.css';
import ToDoList from './todo_list';
import { ToDoInterface } from '../interfaces';

const App = () => {
  const [todos, setTodos] = useState<ToDoInterface[]>([]);
  const [newTodoText, setNewTodoText] = useState('');
  let inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => {
      setTodos(data);
    });
  }, [])

  const remove = (id: number ) => {
    const deletion: ToDoInterface[] = todos.filter((el) => el.id !== id);
    setTodos(deletion);
    // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {method: 'DELETE'})
  };

  const complete = (id: number) => {
    todos.find((el) => el.id === id)!.completed = !todos.find((el) => el.id === id)!.completed;
    setTodos([...todos])
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  const createTodo = () => {
    const newTodo: ToDoInterface = {
      id: Math.random(),
      title: newTodoText,
      completed: false
    }

    todos.unshift(newTodo);
    setTodos([...todos]);

    if (inputRef && inputRef.current) {
      inputRef.current.value = '';
      setNewTodoText('');
    }

  }
  
  return (
    <div className="todo-list-app">
      <div>
        <input 
          type="text" 
          ref={inputRef} 
          className="todo-input" 
          placeholder="Write your todo here" 
          onChange={(event) => handleChange(event)}
        />
        <button onClick={newTodoText ? createTodo : () => alert('Enter To Do')} className="todo-add-btn">ADD</button>
      </div>
      <ToDoList 
        todos={todos}
        remove={remove}
        complete={complete}
      />
    </div>
  )
}

export default App;
