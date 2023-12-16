import Logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="transition border-b border-gray-300 bg-[#F5F5F5] font-extrabold text-[#404040] relative">
			<div className="flex items-center justify-between p-5 mx-auto relative mt-[-0.75rem]">
				<div className="flex items-center">
					<a
						href="#"
						className="no-underline hover:text-[#008AFF] h-[50px] p-4 bg-transparent text-xl"
					>
						Recipe Book
					</a>
				</div>
				<div
					className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
					style={{ top: "80px" }}
				>
					<img
						src={Logo}
						alt="Logo"
						className="w-8 h-8 md:w-[100px] md:h-[100px] mx-auto md:mx-0 hidden md:block rounded-full ring-black ring-2"
					/>
				</div>
				<ul className="flex space-x-8 text-xs uppercase mt-[0.75rem] mr-8">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</ul>
				{/* Add responsive button/menu here */}
			</div>
		</nav>
	);
};

export default Navbar;
