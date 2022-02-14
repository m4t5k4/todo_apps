import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react'

function App() {
  
  //state
  const [todos, setTodos] = useState([]);

  //binding
  const todoText = useRef();

  //side effects
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, [])

  //events
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>

      <form onSubmit={addTodo}>
        <input ref={todoText} />
        <input type="submit" value="add todo"/>
      </form>
    </div>
  );
}

export default App;
