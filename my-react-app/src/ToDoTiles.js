// ToDoTiles.js
import React from 'react';
import Checkbox from './checkbox';
const ToDoTiles = ({ todos }) => (
  <div>
    <h2>Tasks:</h2>
    <ul style={mystyle}>
      {todos.map((todo, index) => (
        
       <li key={index}><Checkbox label={todo}></Checkbox></li> 
      ))}
    </ul>
  </div>
);
const mystyle={
    listStyleType:'none'
  }
export default ToDoTiles;
