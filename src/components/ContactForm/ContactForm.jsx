import { useState } from "react";
import FormInput from "../FormInput/FormInput";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="flex align-center items-center justify-center mt-8">
			<form onSubmit={handleSubmit} className="space-y-8 w-[50vw]">
				<FormInput
					type="email"
					id="email"
					label="Your email"
					placeholder="test@example.com"
					required
					value={formData.email}
					onChange={handleChange}
				/>
				<FormInput
					type="text"
					id="subject"
					label="Subject"
					placeholder="Let us know how we can help you"
					required
					value={formData.subject}
					onChange={handleChange}
				/>
				<FormInput
					type="textarea"
					id="message"
					label="Your message"
					placeholder="Leave a comment..."
					value={formData.message}
					onChange={handleChange}
				/>
				{/* Other form inputs */}
				<button
					type="submit"
					className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-[#008AFF] sm:w-fit hover:bg-[#006FD6] focus:ring-4 focus:outline-none focus:ring-[#004182]"
				>
					Send message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
