// InputField.js
import React from 'react';

const InputField = ({ values, handleChange, handleAddTodo }) => (
  <div>
    <input
      className='form-input'
      type='text'
      name='task name'
      placeholder='Enter your task name'
      value={values}
      onChange={handleChange}
    />
    <button onClick={handleAddTodo}>Add Todo</button>
  </div>
);

export default InputField;
