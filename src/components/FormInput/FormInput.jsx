const FormInput = ({
	type,
	id,
	label,
	name,
	placeholder,
	required,
	value,
	onChange,
}) => {
	const commonClasses = `
      block p-2.5 w-full text-sm text-[#404040]
      bg-[#F5F5F5] rounded-lg shadow-sm border border-gray-300
      focus:ring-[#008AFF] focus:border-[#008AFF]
    `;

	return (
		<div>
			<label htmlFor={id}>{label}</label>
			{type === "textarea" ? (
				<textarea
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
					value={value}
					onChange={onChange}
					className={commonClasses}
				/>
			) : (
				<input
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
					value={value}
					onChange={onChange}
					className={commonClasses}
				/>
			)}
		</div>
	);
};

export default FormInput;
