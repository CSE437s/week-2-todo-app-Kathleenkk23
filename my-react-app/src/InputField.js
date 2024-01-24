import React from 'react';
import './InputField.css'; 

const InputField = ({ values, handleChange, handleAddTodo }) => (
  <div className='input-field-container'>
    <input
      className='form-input'
      type='text'
      name='task name'
      placeholder='Enter your task name'
      value={values}
      onChange={handleChange}
    />
    <button className='add-todo-button' onClick={handleAddTodo}>
      Add Todo
    </button>
  </div>
);

export default InputField;
