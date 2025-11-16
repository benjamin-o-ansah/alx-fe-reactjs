import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0)
    return <p>No recipes found. Try adding some or adjusting your search.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '0.5rem',
            borderRadius: '5px'
          }}
        >
          <h3>{recipe.title}</h3>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
