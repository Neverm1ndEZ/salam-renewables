import React from "react";
import { Sun, Battery, Home, Zap } from "lucide-react";

const HowWeDoIt = () => {
	const steps = [
		{
			icon: Sun,
			title: "Harness Solar Energy",
			description:
				"We use advanced photovoltaic technology to capture sunlight and convert it into electricity.",
		},
		{
			icon: Battery,
			title: "Store Excess Power",
			description:
				"Excess energy is stored in high-capacity batteries for use during non-sunny periods.",
		},
		{
			icon: Zap,
			title: "Distribute to Grid",
			description:
				"Clean energy is distributed to local electricity providers, powering communities.",
		},
		{
			icon: Home,
			title: "Power Communities",
			description:
				"Homes and businesses receive sustainable, affordable electricity from solar sources.",
		},
	];

	return (
		<section className="bg-white py-24">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-16 text-sky-800">
					How Do We Do It?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{steps.map((step, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
						>
							<div className="bg-sky-100 p-4 rounded-full mb-6">
								<step.icon className="w-12 h-12 text-sky-600" />
							</div>
							<h3 className="text-xl font-semibold mb-4 text-sky-800">
								{step.title}
							</h3>
							<p className="text-sky-600">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowWeDoIt;
