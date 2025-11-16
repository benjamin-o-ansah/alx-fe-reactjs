import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  // Search state
  searchTerm: '',
  filteredRecipes: [],

  // CRUD actions
  addRecipe: (recipe) =>
    set((state) => {
      const updated = [...state.recipes, recipe];
      return {
        recipes: updated,
        filteredRecipes: applyFilter(updated, state.searchTerm),
      };
    }),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      );
      return {
        recipes: updated,
        filteredRecipes: applyFilter(updated, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: applyFilter(updated, state.searchTerm),
      };
    }),

  // Search term setter
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: applyFilter(state.recipes, term),
    })),
}));

// Helper function
function applyFilter(recipes, term) {
  if (!term) return recipes;
  const lower = term.toLowerCase();
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(lower)
  );
}
