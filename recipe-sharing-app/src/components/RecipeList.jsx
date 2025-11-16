import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            marginBottom: '1rem',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '6px',
          }}
        >
          <h3 style={{ margin: 0 }}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p style={{ marginTop: '6px' }}>
            {recipe.description?.length > 120
              ? recipe.description.slice(0, 120) + '…'
              : recipe.description}
          </p>

          <div style={{ display: 'flex', gap: '8px' }}>
            <Link to={`/edit/${recipe.id}`}>
              <button>Edit</button>
            </Link>

            <DeleteRecipeButton id={recipe.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
