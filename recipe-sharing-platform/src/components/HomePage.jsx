import { useEffect, useState } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";


const HomePage = () => {
const [recipes, setRecipes] = useState([]);


useEffect(() => {
// Simulate fetching data
setRecipes(recipesData);
}, []);


return (
<div className="min-h-screen bg-gray-50 py-10 px-4">
<div className="max-w-7xl mx-auto">
<h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
🍽️ Recipe Sharing Platform
</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{recipes.map((recipe) => (
<div
key={recipe.id}
className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
>
<img
src={recipe.image}
alt={recipe.title}
className="w-full h-48 object-cover"
/>


<div className="p-5">
<h2 className="text-xl font-semibold text-gray-800 mb-2">
{recipe.title}
</h2>
<p className="text-gray-600 text-sm mb-4">
{recipe.summary}
</p>


<Link
to={`/recipe/${recipe.id}`}
className="inline-block text-sm font-medium text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
>
View Recipe
</Link>
</div>
</div>
))}
</div>
</div>
</div>
);
};


export default HomePage;