// Import useNavigate from react-router-dom
import { useState, useEffect } from "react";
import CommonInput from "../Form/CommonInput";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
	const { title } = useParams();
	const navigate = useNavigate(); // Replace useHistory with useNavigate

	const [editedRecipe, setEditedRecipe] = useState({
		title: "",
		description: "",
		ingredients: "",
		instructions: "",
		image: null,
		imageUrl: "",
	});

	useEffect(() => {
		// Fetch data or set initial state based on the title parameter
		// Example: api.get(`/recipes/${title}`).then((data) => setEditedRecipe(data));

		// For simplicity, setting initial state
		setEditedRecipe({
			title: title,
			description: "Sample description",
			ingredients: "Sample ingredients",
			instructions: "Sample instructions",
			image: null,
			imageUrl: "https://via.placeholder.com/150", // Sample image URL
		});
	}, [title]);

	const handleChange = (e) => {
		const { name, value, files } = e.target;

		if (name === "image" && files && files[0]) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setEditedRecipe((prevRecipe) => ({
					...prevRecipe,
					imageUrl: reader.result,
					image: files[0],
				}));
			};

			reader.readAsDataURL(files[0]);
		} else {
			setEditedRecipe((prevRecipe) => ({
				...prevRecipe,
				[name]: value,
			}));
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		// Simulate the update locally (replace with your actual logic)
		const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
		const updatedRecipes = existingRecipes.map((r) =>
			r.title === title ? editedRecipe : r
		);

		// Save the updated recipes to local storage
		localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

		// For simplicity, navigate to the recipes list page
		navigate("/my-recipes");
	};

	return (
		<div className="flex align-center items-center justify-center mt-24">
			<form onSubmit={handleFormSubmit} className="space-y-8 w-[50vw]">
				<label className="block text-sm text-[#404040]">Title:</label>
				<CommonInput
					type="text"
					name="title"
					value={editedRecipe.title}
					onChange={handleChange}
					placeholder="Enter title"
					required
				/>

				<label className="block text-sm text-[#404040]">Description:</label>
				<CommonInput
					type="text"
					name="description"
					value={editedRecipe.description}
					onChange={handleChange}
					placeholder="Enter description"
					required
				/>

				<label className="block text-sm text-[#404040]">Ingredients:</label>
				<CommonInput
					type="textarea"
					name="ingredients"
					value={editedRecipe.ingredients}
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

				{editedRecipe.imageUrl && (
					<img
						src={editedRecipe.imageUrl}
						alt="Recipe"
						className="recipe-image-preview"
					/>
				)}

				<label className="block text-sm text-[#404040]">Instructions:</label>
				<CommonInput
					type="textarea"
					name="instructions"
					value={editedRecipe.instructions}
					onChange={handleChange}
					placeholder="Enter instructions"
					required
				/>

				<button
					type="submit"
					className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-[#008AFF] sm:w-fit hover:bg-[#006FD6] focus:ring-4 focus:outline-none focus:ring-[#004182]"
				>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default Edit;
