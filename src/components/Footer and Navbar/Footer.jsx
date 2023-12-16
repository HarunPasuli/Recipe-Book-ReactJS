import github from "../../assets/images/github.png";

const Footer = () => {
	return (
		<footer className="border-t border-gray-300 bg-[#F5F5F5] text-[#404040] text-center p-5 relative pt-10 pb-10">
			<a
				href="https://www.github.com/harunpasuli"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={github} alt="GitHub Icon" className="w-14 h-10 mx-auto " />
			</a>
			<p className="text-sm mt-3">© 2023 Recipe Book. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
