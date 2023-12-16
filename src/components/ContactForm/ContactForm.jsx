// ContactForm.js
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "../FormInput/FormInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_e17k8jr",
				"template_yz9zcmj",
				form.current,
				"LFI7_PUvhGitg8sBH"
			)
			.then(
				(result) => {
					console.log(result.text);
					// Show success notification
					toast.success("Form submitted successfully!");
					setFormData((prevData) => ({
						...prevData,
						user_name: "",
						user_email: "",
						message: "",
					}));
					e.target.reset(); // Reset the form
				},
				(error) => {
					console.log(error.text);
					// Show error notification if needed
					toast.error("Form submission failed. Please try again.");
				}
			);
	};

	return (
		<div className="flex align-center items-center justify-center mt-8">
			<ToastContainer />
			<form ref={form} onSubmit={sendEmail} className="space-y-8 w-[50vw]">
				<FormInput
					type="text"
					id="user_name"
					label="Your name"
					name="user_name"
					placeholder="John Doe"
					required
					value={formData.user_name}
					onChange={handleChange}
				/>
				<FormInput
					type="email"
					id="user_email"
					label="Your email"
					name="user_email"
					placeholder="test@example.com"
					required
					value={formData.user_email}
					onChange={handleChange}
				/>
				<FormInput
					type="textarea"
					id="message"
					label="Your message"
					name="message"
					placeholder="Leave a comment..."
					value={formData.message}
					onChange={handleChange}
				/>
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
