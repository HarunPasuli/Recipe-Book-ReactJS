import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Recipe = () => {
	const { title } = useParams();
	const [recipeList, setRecipeList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
		console.log("Stored Recipes:", storedRecipes);
		setRecipeList(storedRecipes);
		setLoading(false);
	}, []); // <-- Make sure to add an empty dependency array if you want it to run only once

	const recipe = recipeList.find(
		(r) => r.title.trim().toLowerCase() === title.trim().toLowerCase()
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!recipe) {
		// Handle error state or loading state
		return (
			<div className="flex text-center items-center justify-center flex-col min-h-screen">
				<h1 className="font-bold underline-offset-8 text-9xl">
					Error 404: Recipe not found
				</h1>
			</div>
		);
	}

	return (
		<div className="md:mt-32 w-full text-[#404040] flex-grow flex flex-col items-center justify-center">
			<img
				src={renderImage(recipe.image)}
				alt="Recipe Image"
				className="h-40 object-cover rounded-t-lg w-[50vw]"
			/>
			<div className="p-4 text-center">
				<h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
				<p className="text-gray-700 mb-2">{recipe.description}</p>
				<div className="mb-2">
					<strong>Ingredients:</strong>
					<p className="text-gray-700">{recipe.ingredients}</p>
				</div>
				<div>
					<strong>Instructions:</strong>
					<p className="text-gray-700">{recipe.instructions}</p>
				</div>
			</div>
		</div>
	);
};

// Function to render the image based on its type
const renderImage = (image) => {
	if (image instanceof Blob || image instanceof File) {
		return URL.createObjectURL(image);
	} else if (typeof image === "string") {
		return image;
	} else {
		return "/src/assets/images/Logo.png";
	}
};

export default Recipe;
