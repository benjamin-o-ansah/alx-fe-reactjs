import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const numericId = isNaN(Number(id)) ? id : Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === numericId)
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || '');
      setDescription(recipe.description || '');
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back to list</button>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return alert('Title is required');
    updateRecipe(recipe.id, { title: title.trim(), description: description.trim() });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <div>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginTop: '8px' }}>
        <textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', minHeight: '120px', padding: '8px' }}
        />
      </div>

      <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
