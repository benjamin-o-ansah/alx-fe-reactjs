import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const numericId = isNaN(Number(id)) ? id : Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === numericId)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>

      {/* Example fields — extend as needed */}
      <p>{recipe.description}</p>

      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <Link to={`/edit/${recipe.id}`}>
          <button>Edit</button>
        </Link>

        <DeleteRecipeButton id={recipe.id} />

        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
