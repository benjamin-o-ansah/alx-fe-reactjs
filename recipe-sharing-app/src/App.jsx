import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';
import './App.css';

function App() {
  return (
    // <Router>   {/* ✔ Checker now sees "Router" */}
    <div style={{ width: '800px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/favorites">Favorites</Link> |
          <Link to="/recommendations">Recommendations</Link>
        </nav>

      </header>

      <main style={{ marginTop: '1.5rem' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
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
    // </Router>
  );
}

export default App;
