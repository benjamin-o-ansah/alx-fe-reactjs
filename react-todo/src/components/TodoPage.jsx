const TodoPage = ({ todos, toggleTodo, deleteTodo }) => (
    <div style={{ padding: '20px' }}>
      <h1>Your Todo List</h1>
      {todos.length === 0 ? <p>No todos yet. Go home to add some!</p> : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id} style={{ marginBottom: '10px' }}>
              <span 
                onClick={() => toggleTodo(todo.id)}
                style={{ 
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer' 
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  export default TodoPage;