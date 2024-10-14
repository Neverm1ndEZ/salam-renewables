"use client";

import { useState } from "react";

const Contact = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formState);
	};

	return (
		<section id="contact" className="bg-sky-100 py-24">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-12 text-sky-800">
					Get in Touch
				</h2>
				<form
					onSubmit={handleSubmit}
					className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md animate-fade-in-up"
				>
					<div className="mb-6">
						<label
							htmlFor="name"
							className="block text-sky-700 mb-2 font-medium"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formState.name}
							onChange={handleChange}
							className="w-full p-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block text-sky-700 mb-2 font-medium"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formState.email}
							onChange={handleChange}
							className="w-full p-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="block text-sky-700 mb-2 font-medium"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formState.message}
							onChange={handleChange}
							rows={4}
							className="w-full p-3 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200"
							required
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-sky-600 transition-all duration-200 hover:scale-105 active:scale-95"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
