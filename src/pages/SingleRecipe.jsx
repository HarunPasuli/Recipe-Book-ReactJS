import Footer from "../components/Footer and Navbar/Footer";
import Navbar from "../components/Footer and Navbar/Navbar";
import Recipe from "../components/Recipe/Recipe";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleRecipe = () => {
	const [recipes, setRecipes] = useState([]);
	const { title } = useParams();

	useEffect(() => {
		// Fetch recipes from local storage or API
		const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
		setRecipes(storedRecipes);
	}, []);

	// Filter the recipes array to find the matching recipe
	const selectedRecipe = recipes.find((recipe) => recipe.title === title);

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			{/* Pass the selectedRecipe to the Recipe component */}
			<Recipe recipes={selectedRecipe ? [selectedRecipe] : []} />
			<Footer />
		</div>
	);
};

export default SingleRecipe;
