import Footer from "../components/Footer and Navbar/Footer";
import Navbar from "../components/Footer and Navbar/Navbar";
import RecipeInsert from "../components/Form/RecipeInsert";

const RecipeForm = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<RecipeInsert />
			<Footer />
		</div>
	);
};

export default RecipeForm;
