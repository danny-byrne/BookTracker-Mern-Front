import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const pStyle = {
  size: "20px",
  color: "white",
}

const container = {
  backgroundColor: "blue",
  height: '500px',
  display: "flex",
  justifyContent: 'center'
}

const componentStyle = {
  
}

function App() {
  return (
    <div style = {container} className="App">
      <h1 style = {pStyle}>Hello!</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
