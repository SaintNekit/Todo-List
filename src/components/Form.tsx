import React, {useState, useRef, ChangeEvent} from 'react';
import { InputInterface } from '../interfaces';

const Form = (props: InputInterface) => {
  const [newTodoText, setNewTodoText] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  const clearRef = () => {
    if (ref && ref.current) {
      ref.current.value = '';
    };
  }
  
  return (
    <div>
      <input 
        type="text"
        ref={ref}
        className="todo-input"
        placeholder="Write your todo here" 
        onChange={(event) => handleChange(event)}
      />
      <button className="todo-add-btn" onClick={newTodoText.length ? () => {
        props.createTodo(newTodoText);
        setNewTodoText('');
        clearRef();
      }  : () => alert('Enter To Do')}>ADD</button>
    </div>
  )
}

export default Form;
