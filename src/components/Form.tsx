import React, {useState, useRef, ChangeEvent, useLayoutEffect} from 'react';
import { InputInterface } from '../interfaces';

const Form = (props: InputInterface) => {
  const [newTodoText, setNewTodoText] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
    props.setInputText(newTodoText);
  };

  const clearRef = () => {
    props.createTodo(newTodoText);
    setNewTodoText('');
    ref!.current!.value = "";
  }

  useLayoutEffect(() => {
    if (!props.inputText.length) {
      ref!.current!.value = "";
      setNewTodoText('');
    }
  }, [props.inputText])
  
  return (
    <div>
      <input 
        type="text"
        ref={ref}
        className="todo-input"
        placeholder="Write your todo here" 
        onChange={(event) => handleChange(event)}
      />
      <button className="todo-add-btn" onClick={newTodoText.length ? () => clearRef() : () => alert('Enter To Do')}>ADD</button>
    </div>
  )
}

export default Form;
