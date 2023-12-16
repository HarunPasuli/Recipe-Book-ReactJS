import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList/RecipeList";

const ShowRecipes = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		// Fetch recipes from local storage or API here
		const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
		setRecipes(storedRecipes);
	}, []);

	return (
		<div className="flex flex-col min-h-screen">
			<RecipeList recipes={recipes} />
		</div>
	);
};

export default ShowRecipes;
