import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import RecipeForm from "./pages/RecipeForm";
import MyRecipes from "./pages/MyRecipes";
import EditRecipe from "./pages/EditRecipe";
import SingleRecipe from "./pages/SingleRecipe";
import Dashboard from "./pages/Dashboard";

function App() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		// Fetch recipes from local storage
		const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

		// Set the recipes state with the fetched data
		setRecipes(storedRecipes);
	}, []); // Run the effect only once on component mount

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					{/* Nested route for the About page */}
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/recipe/add" element={<RecipeForm />} />
					<Route path="/my-recipes" element={<MyRecipes />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/recipe/edit/:title" element={<EditRecipe />} />
					<Route
						path="/recipe/:title"
						element={<SingleRecipe recipes={recipes} />}
					/>
					<Route path="*" element={<NoPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
