import { useRecipeStore } from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFav = favorites.includes(recipeId);

  return (
    <button
      onClick={() => (isFav ? removeFavorite(recipeId) : addFavorite(recipeId))}
      style={{
        padding: "0.4rem 0.7rem",
        marginTop: "0.5rem",
        cursor: "pointer",
      }}
    >
      {isFav ? "★ Unfavorite" : "☆ Favorite"}
    </button>
  );
};

export default FavoriteButton;
