import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import RecipeForm from "./pages/RecipeForm";
import MyRecipes from "./pages/MyRecipes";
import EditRecipe from "./pages/EditRecipe";

function App() {
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
					<Route path="/recipe/edit/:title" element={<EditRecipe />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
