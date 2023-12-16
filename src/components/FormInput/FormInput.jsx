const FormInput = ({ type, id, label, placeholder, required }) => {
	const commonProps = {
		className:
			"block p-2.5 w-full text-sm text-[#404040] bg-[#F5F5F5] rounded-lg shadow-sm border border-gray-300 focus:ring-[#008AFF] focus:border-[#008AFF]",
		id,
		placeholder,
		required,
	};
	return (
		<div>
			<label
				htmlFor={id}
				className="block mb-2 text-sm font-medium text-[#404040]"
			>
				{label}
			</label>
			{type === "textarea" ? (
				<textarea {...commonProps}></textarea>
			) : (
				<input type={type} {...commonProps} />
			)}
		</div>
	);
};

export default FormInput;
