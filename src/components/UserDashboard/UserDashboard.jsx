import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="flex justify-center items-center mt-8 space-x-4">
			<Link
				to="/home"
				className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-700"
			>
				Home
			</Link>
			<Link
				to="/about"
				className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-700"
			>
				About
			</Link>
			<Link
				to="/contact"
				className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-700"
			>
				Contact
			</Link>
			<Link
				to="/recipe/add"
				className="bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-700"
			>
				Add Recipe
			</Link>
			<Link
				to="/my-recipes"
				className="bg-indigo-500 text-black px-4 py-2 rounded hover:bg-indigo-700"
			>
				My Recipes
			</Link>
			<Link
				to="/dashboard"
				className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-gray-700"
			>
				Dashboard
			</Link>
		</div>
	);
};

export default Dashboard;
