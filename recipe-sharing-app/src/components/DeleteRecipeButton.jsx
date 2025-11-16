import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm('Delete this recipe?');
    if (!confirmed) return;

    deleteRecipe(id);
    // If user is viewing the deleted recipe page, navigate home.
    navigate('/');
  };

  return (
    <button onClick={handleDelete} aria-label="Delete recipe">
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
