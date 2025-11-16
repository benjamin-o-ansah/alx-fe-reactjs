import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) {
      return alert('Title is required');
    }

    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      // you can expand with ingredients, steps, imageUrl, etc.
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add a Recipe</h2>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Recipe title"
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginTop: '8px' }}>
        <textarea
          value={description}
          placeholder="Recipe description"
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', minHeight: '80px', padding: '8px' }}
        />
      </div>

      <div style={{ marginTop: '8px' }}>
        <button type="submit">Add Recipe</button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
