import React from 'react'

function TodoList({ todos }) {
  let dummy = 0;

  for (let i = 0; i < 100000000; i++) {
    dummy += i;
  }

  return (
    <ul>
      {todos.map((el) => (
        <li key={el.id}>{el.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;