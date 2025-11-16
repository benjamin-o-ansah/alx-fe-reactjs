import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations) || [];

  if (recommendations.length === 0) {
    return (
      <div>
        <h2>Recommended For You</h2>
        <p>No recommendations yet. Favorite some recipes to see suggestions!</p>
      </div>
    );
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {recommendations.map((recipe) => (
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

export default RecommendationsList;
