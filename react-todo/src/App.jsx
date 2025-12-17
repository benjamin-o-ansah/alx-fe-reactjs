
import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TodoPage from './components/TodoPage';
function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };
  return (
    <>
    <Router>
      <nav style={{ padding: '10px', background: '#eee', display: 'flex', gap: '15px' }}>
        <Link to="/">Home (Add Todo)</Link>
        <Link to="/todos">View Todos ({todos.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home addTodo={addTodo} />} />
        <Route 
          path="/todos" 
          element={
            <TodoPage 
              todos={todos} 
              toggleTodo={toggleTodo} 
              deleteTodo={deleteTodo} 
            />
          } 
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
