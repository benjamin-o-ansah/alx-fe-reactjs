import { create } from 'zustand';

// Helper: simple recommendation mock logic
function generateRecommended(recipes, favorites) {
  if (favorites.length === 0) return [];

  const favSet = new Set(favorites);
  const favRecipes = recipes.filter((r) => favSet.has(r.id));

  // Simple: recommend recipes that share the first word of a favorited recipe's title
  const keywords = favRecipes
    .map((r) => r.title.split(" ")[0].toLowerCase())
    .filter(Boolean);

  return recipes.filter((recipe) => {
    const title = recipe.title.toLowerCase();
    return keywords.some((k) => title.includes(k)) && !favSet.has(recipe.id);
  });
}

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  // Favorites
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => {
      const updated = [...state.favorites, recipeId];
      return {
        favorites: updated,
        recommendations: generateRecommended(state.recipes, updated),
      };
    }),

  removeFavorite: (recipeId) =>
    set((state) => {
      const updated = state.favorites.filter((id) => id !== recipeId);
      return {
        favorites: updated,
        recommendations: generateRecommended(state.recipes, updated),
      };
    }),

  // Recommendations list
  recommendations: [],

  // Recompute manually if needed
  refreshRecommendations: () =>
    set((state) => ({
      recommendations: generateRecommended(
        state.recipes,
        state.favorites
      ),
    })),

  // CRUD actions
  addRecipe: (recipe) =>
    set((state) => {
      const updated = [...state.recipes, recipe];
      return {
        recipes: updated,
        recommendations: generateRecommended(updated, state.favorites),
      };
    }),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      );
      return {
        recipes: updated,
        recommendations: generateRecommended(updated, state.favorites),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      const updatedFavs = state.favorites.filter((f) => f !== id);

      return {
        recipes: updated,
        favorites: updatedFavs,
        recommendations: generateRecommended(updated, updatedFavs),
      };
    }),
}));
