import AddTodoForm from './AddTodoForm';

const Home = ({ addTodo }) => (
  <div style={{ padding: '20px' }}>
    <h1>Home - Add a Task</h1>
    <AddTodoForm onAddTodo={addTodo} />
    <p>Go to the Todo List page to see your tasks!</p>
  </div>
);

export default Home;