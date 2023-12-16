import Navbar from "../components/Footer and Navbar/Navbar";
import Footer from "../components/Footer and Navbar/Footer";

const NoPage = () => {
	return (
		<>
			<Navbar />
			<div className="flex text-center items-center justify-center flex-col min-h-screen">
				<h1 className="font-bold underline-offset-8 text-9xl">
					Error 404: Not Found
				</h1>
			</div>

			<Footer />
		</>
	);
};

export default NoPage;
