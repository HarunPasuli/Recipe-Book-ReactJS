import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			{recipes.map((recipe) => (
				<Link key={recipe.title} to={`/recipe/${recipe.title}`}>
					<div
						key={recipe.title}
						className="recipe-card p-4 bg-white shadow-md rounded-lg"
					>
						<img
							src={renderImage(recipe.image)}
							alt="Recipe Image"
							className="w-full h-40 object-cover rounded-t-lg"
						/>
						<div className="p-4">
							<h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
							<p className="text-gray-700 mb-4">{recipe.description}</p>
							{/* <ul className="text-sm text-gray-600">
							<li>Ingredients: {recipe.ingredients}</li>
							<li>Instructions: {recipe.instructions}</li>
						</ul> */}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

// Function to render the image based on its type
const renderImage = (image) => {
	if (image instanceof Blob || image instanceof File) {
		// If image is a Blob or File, create object URL
		return URL.createObjectURL(image);
	} else if (typeof image === "string") {
		// If image is already a URL, use it directly
		return image;
	} else {
		// Provide a default image URL or placeholder
		return "/src/assets/images/Logo.png"; // Replace with your default image URL or placeholder
	}
};

export default RecipeList;
