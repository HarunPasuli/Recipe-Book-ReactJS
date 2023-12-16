const CommonInput = ({
	type,
	name,
	value,
	onChange,
	placeholder,
	required,
}) => {
	const commonClasses = `
    block p-2.5 w-full text-sm text-[#404040]
    bg-[#F5F5F5] rounded-lg shadow-sm border border-gray-300
    focus:ring-[#008AFF] focus:border-[#008AFF]
  `;

	return (
		<div>
			{type === "textarea" ? (
				<textarea
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					className={commonClasses}
				/>
			) : (
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					className={commonClasses}
				/>
			)}
		</div>
	);
};

export default CommonInput;
