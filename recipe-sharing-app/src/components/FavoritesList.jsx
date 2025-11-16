import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes) || [];
  const favorites = useRecipeStore((state) => state.favorites) || [];

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (favoriteRecipes.length === 0) {
    return <p>No favorites yet. Favorite some recipes to see them here!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {favoriteRecipes.map((recipe) => (
        <li
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <h3>{recipe.title}</h3>
          {recipe.description && <p>{recipe.description}</p>}
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          <br />
          <FavoriteButton recipeId={recipe.id} />
        </li>
      ))}
    </ul>
  );
};

export default FavoritesList;
