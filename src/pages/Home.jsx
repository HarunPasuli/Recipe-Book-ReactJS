import Navbar from "../components/Footer and Navbar/Navbar";
import Footer from "../components/Footer and Navbar/Footer";
import ShowRecipes from "./ShowRecipes";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="md:mt-32 w-full text-[#404040] flex-grow">
				<div className="text-center">
					<h1 className="font-extrabold underline-offset-8 text-7xl text-center mb-3">
						Home
					</h1>
					<hr className="max-w-[100px] my-15 mx-auto border-[3px] border-[#404040] rounded" />
				</div>
				<div className="flex justify-center items-center text-center mt-8">
					<p className="max-w-3xl text-lg mb-12">
						You can view all of your recipes here
					</p>
				</div>
				<ShowRecipes />
			</div>
			<Footer />
		</>
	);
};

export default Home;
