import { useState } from "react";
import CommonInput from "./CommonInput";

const RecipeForm = () => {
	const [recipe, setRecipe] = useState({
		title: "",
		description: "",
		ingredients: "",
		instructions: "",
		image: null, // Store the image file object
		imageUrl: "", // Store the image data URL for display
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;

		if (name === "image" && files && files[0]) {
			// Handle image file upload
			const reader = new FileReader();

			reader.onloadend = () => {
				setRecipe((prevRecipe) => ({
					...prevRecipe,
					imageUrl: reader.result,
					image: files[0],
				}));
			};

			reader.readAsDataURL(files[0]); // Read the image file as a data URL
		} else {
			// Handle other form inputs
			setRecipe((prevRecipe) => ({
				...prevRecipe,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Save recipe to local storage
		const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
		const updatedRecipes = [...existingRecipes, recipe];
		localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

		// Reset the form after submission
		setRecipe({
			title: "",
			description: "",
			ingredients: "",
			instructions: "",
			image: null,
			imageUrl: "",
		});
	};

	return (
		<div className="flex align-center items-center justify-center mt-24">
			<form onSubmit={handleSubmit} className="space-y-8 w-[50vw]">
				<label className="block text-sm text-[#404040]">Title:</label>
				<CommonInput
					type="text"
					name="title"
					value={recipe.title}
					onChange={handleChange}
					placeholder="Enter title"
					required
				/>

				<label className="block text-sm text-[#404040]">Description:</label>
				<CommonInput
					type="text"
					name="description"
					value={recipe.description}
					onChange={handleChange}
					placeholder="Enter description"
					required
				/>

				<label className="block text-sm text-[#404040]">Ingredients:</label>
				<CommonInput
					type="textarea"
					name="ingredients"
					value={recipe.ingredients}
					onChange={handleChange}
					placeholder="Enter ingredients"
					required
				/>

				<label className="block text-sm text-[#404040]">Image:</label>
				<input
					type="file"
					name="image"
					onChange={handleChange}
					accept="image/*"
					className="block p-2.5 w-full text-sm text-[#404040] bg-[#F5F5F5] rounded-lg shadow-sm border border-gray-300 focus:ring-[#008AFF] focus:border-[#008AFF]"
				/>

				{/* Display the preview of the uploaded image */}
				{recipe.imageUrl && (
					<img
						src={recipe.imageUrl}
						alt="Recipe"
						className="recipe-image-preview"
					/>
				)}

				<label className="block text-sm text-[#404040]">Instructions:</label>
				<CommonInput
					type="textarea"
					name="instructions"
					value={recipe.instructions}
					onChange={handleChange}
					placeholder="Enter instructions"
					required
				/>

				<button
					type="submit"
					className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-[#008AFF] sm:w-fit hover:bg-[#006FD6] focus:ring-4 focus:outline-none focus:ring-[#004182]"
				>
					Submit Recipe
				</button>
			</form>
		</div>
	);
};

export default RecipeForm;
