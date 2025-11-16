import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // add a new recipe (keeps previous behavior)
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // update an existing recipe by id
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    })),

  // delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // replace whole list (handy for initialization or persistence)
  setRecipes: (recipes) => set({ recipes }),
}));
