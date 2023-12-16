import { useState, useEffect } from "react";
import RecipeTable from "../components/RecipeTable/RecipeTable"; // Update the path accordingly

const ShowRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	useEffect(() => {
		// Fetch recipes from local storage on component mount
		const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
		setRecipes(storedRecipes);
	}, []);

	const handleEdit = (recipe) => {
		setSelectedRecipe(recipe);
	};

	const handleDelete = (recipe) => {
		// Implement your delete logic here
		const updatedRecipes = recipes.filter((r) => r.title !== recipe.title);
		setRecipes(updatedRecipes);
		localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
	};

	return (
		<div className="flex flex-col items-center justify-center mt-8">
			{/* Additional content can be added here in the future */}

			{/* Render the RecipeTable component */}
			<RecipeTable
				recipes={recipes}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default ShowRecipes;
