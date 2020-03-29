import React, {useState, useRef, ChangeEvent, useEffect} from 'react';
import { InputInterface } from '../interfaces';
import PropTypes from 'prop-types';

const Form = (props: InputInterface) => {
  const [newTodoText, setNewTodoText] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
    props.setInputText(e.target.value);
  };

  const clearRef = () => {
    props.createTodo(newTodoText);
    setNewTodoText('');
    props.setInputText('');
    ref!.current!.value = "";
  }

  useEffect(() => {
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

Form.propTypes = {
  setInputText: PropTypes.func,
  createTodo: PropTypes.func,
  inputText: PropTypes.string, 
}

export default Form;
