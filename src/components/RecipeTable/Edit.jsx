import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = ({ recipes }) => {
	const { title } = useParams();
	const history = useNavigate();
	const [editedRecipe, setEditedRecipe] = useState({
		title: "",
		description: "",
		ingredients: "",
		instructions: "",
		image: null, // Add image state if needed
	});

	useEffect(() => {
		// Find the recipe based on the title from the URL params
		const foundRecipe = recipes.find((recipe) => recipe.title === title);

		if (foundRecipe) {
			setEditedRecipe(foundRecipe);
		} else {
			// Redirect to home if the recipe is not found
			history.push("/home");
		}
	}, [recipes, title, history]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedRecipe((prevRecipe) => ({
			...prevRecipe,
			[name]: value,
		}));
	};

	const handleImageChange = (e) => {
		const imageFile = e.target.files[0];
		setEditedRecipe((prevRecipe) => ({
			...prevRecipe,
			image: imageFile,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Update the existing recipe in the recipes array
		const updatedRecipes = recipes.map((recipe) =>
			recipe.title === title ? editedRecipe : recipe
		);

		// Update local storage
		localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

		// Redirect back to the recipe list
		history.push("/home");
	};

	return (
		<div className="max-w-3xl mx-auto mt-8">
			<h2 className="text-2xl font-bold mb-4">Edit Recipe</h2>
			<form onSubmit={handleSubmit}>
				{/* Your input fields go here */}
				{/* Example: */}
				<label>Title:</label>
				<input
					type="text"
					name="title"
					value={editedRecipe.title}
					onChange={handleChange}
					required
				/>
				{/* Add other input fields as needed */}
				<label>Description:</label>
				<input
					type="text"
					name="description"
					value={editedRecipe.description}
					onChange={handleChange}
					required
				/>
				{/* Image upload */}
				<label>Image:</label>
				<input
					type="file"
					name="image"
					onChange={handleImageChange}
					accept="image/*"
				/>
				{/* Add other input fields and buttons as needed */}
				<button
					type="submit"
					className="bg-green-500 text-white px-4 py-2 rounded"
				>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default Edit;
