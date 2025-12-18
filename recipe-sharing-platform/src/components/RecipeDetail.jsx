import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";


const RecipeDetail = () => {
const { id} = useParams();
const [recipe, setRecipe] = useState(null);


useEffect(() => {
const foundRecipe = recipesData.find(
(item) => item.id === parseInt(id)
);
setRecipe(foundRecipe);
}, [id]);


if (!recipe) {
return (
<div className="min-h-screen flex items-center justify-center">
<p className="text-gray-600">Recipe not found.</p>
</div>
);
}


return (
<div className="min-h-screen bg-gray-50 px-4 py-10">
<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
<img
src={recipe.image}
alt={recipe.title}
className="w-full h-64 object-cover"
/>


<div className="p-6">
<h1 className="text-3xl font-bold text-gray-800 mb-4">
{recipe.title}
</h1>


<p className="text-gray-600 mb-6">
{recipe.summary}
</p>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h2 className="text-xl font-semibold mb-3">Ingredients</h2>
<ul className="list-disc list-inside space-y-2 text-gray-700">
{recipe.ingredients.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
</div>


<div>
<h2 className="text-xl font-semibold mb-3">Instructions</h2>
<ol className="list-decimal list-inside space-y-2 text-gray-700">
{recipe.instructions.map((step, index) => (
<li key={index}>{step}</li>
))}
</ol>
</div>
</div>


<div className="mt-8">
<Link
to="/"
className="inline-block text-sm font-medium text-white bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700 transition"
>
← Back to Recipes
</Link>
</div>
</div>
</div>
</div>
);
};


export default RecipeDetail;