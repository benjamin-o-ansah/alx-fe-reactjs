import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import './App.css'

function App() {

  return (
  <div style={{ width: '800px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main style={{ marginTop: '1.5rem' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />

          {/* fallback route */}
          <Route
            path="*"
            element={
              <div>
                <p>Page not found</p>
                <Link to="/">Back to home</Link>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
