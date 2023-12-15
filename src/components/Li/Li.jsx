const Li = ({ href, children }) => {
	return (
		<li className="hover:text-[#008AFF]">
			<a href={href}>{children}</a>
		</li>
	);
};

export default Li;
