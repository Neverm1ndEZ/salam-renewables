import { Sun, DollarSign, PenTool, Zap } from "lucide-react";

const Features = () => {
	const features = [
		{
			title: "Eco-Friendly",
			description: "Reduce your carbon footprint",
			icon: Sun,
		},
		{
			title: "Cost-Effective",
			description: "Save on energy bills",
			icon: DollarSign,
		},
		{
			title: "Low Maintenance",
			description: "Minimal upkeep required",
			icon: PenTool,
		},
		{
			title: "Energy Independence",
			description: "Reduce reliance on the grid",
			icon: Zap,
		},
	];

	return (
		<section id="features" className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-16 text-sky-800">
					Why Choose Solar?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-sky-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<feature.icon className="w-12 h-12 text-sky-500 mb-4" />
							<h3 className="text-xl font-semibold mb-3 text-sky-800">
								{feature.title}
							</h3>
							<p className="text-sky-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
