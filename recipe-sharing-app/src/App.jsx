import { useState } from 'react'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div style={{ width: '600px', margin: '2rem auto', fontFamily: 'Arial' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

export default App
