import { useState } from "react";


const AddRecipeForm = () => {
const [title, setTitle] = useState("");
const [ingredients, setIngredients] = useState("");
const [steps, setSteps] = useState("");
const [errors, setErrors] = useState({});


const validateForm = () => {
const newErrors = {};


if (!title.trim()) newErrors.title = "Recipe title is required";


const ingredientList = ingredients
.split("")
.filter((item) => item.trim() !== "");


if (ingredientList.length < 2) {
newErrors.ingredients = "Please enter at least two ingredients";
}


if (!steps.trim()) newErrors.steps = "Preparation steps are required";


setErrors(newErrors);
return Object.keys(newErrors).length === 0;
};


const handleSubmit = (e) => {
e.preventDefault();


if (!validateForm()) return;


const newRecipe = {
title,
ingredients: ingredients.split(""),
instructions: steps.split("")
};


console.log("Submitted recipe:", newRecipe);


// Reset form
setTitle("");
setIngredients("");
setSteps("");
setErrors({});


alert("Recipe submitted successfully!");
};


return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
        ➕ Add New Recipe
        </h2>
        
        
        <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        Recipe Title
        </label>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        {errors.title && (
        <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
        </div>
        
        
        {/* Ingredients */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        Ingredients (one per line)
        </label>
        <textarea
        rows="4"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        {errors.ingredients && (
        <p className="text-red-500 text-sm mt-1">
        {errors.ingredients}
        </p>
        )}
        </div>
        
        
        {/* Steps */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        Preparation Steps (one per line)
        </label>
        <textarea
        rows="4"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        {errors.steps && (
        <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
        )}
        </div>
        
        
        <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
        Submit Recipe
        </button>
        </form>
        </div>
        </div>
        );
        };
        
        
        export default AddRecipeForm;