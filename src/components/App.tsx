import React, { useState, useEffect } from 'react';
import fetch from 'cross-fetch';
import '../styles.css';
import ToDoList from './todo_list';
import { ToDoInterface } from '../interfaces';
import Form from './Form';

const App = () => {
  const [todos, setTodos] = useState<ToDoInterface[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => {
      // setTodos(data);
      const Todos = data.filter((el: any) => el.id < 10);
      setTodos(Todos);
    });
  }, [])

  const remove = (id: number ) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {method: 'DELETE'})
      .then(response => response.json())
      .then(() => {
        const newList: ToDoInterface[] = todos.filter((el) => el.id !== id);
        setTodos(newList);
      })
  };

  const complete = (id: number) => {
    const toggleComplete = todos.find((el) => el.id === id);
    toggleComplete!.completed = !toggleComplete!.completed;
    setTodos([...todos])
  };

  const createTodo = (text: string) => {
    const newTodo: ToDoInterface = {
      id: Math.random(),
      title: text,
      completed: false,
    }

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        data.id = Math.random();
        const newList: ToDoInterface[] = [data, ...todos];
        setTodos(newList);
      })
  }

  const update = (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: 'Up to date'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        todos.find((el) => el.id === id)!.title = data.title;
        setTodos([...todos])
      })
  }
  
  return (
    <div className="todo-list-app">
        <Form createTodo={createTodo}/>
        <ToDoList 
        todos={todos}
        remove={remove}
        complete={complete}
        update={update}
      />
    </div>
  )
}

export default App;
