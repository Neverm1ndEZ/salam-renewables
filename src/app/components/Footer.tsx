import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gradient-to-b from-sky-400 via-sky-700 to-sky-900 text-white py-8 sm:py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
					<div className="w-full sm:w-1/4 mb-8 sm:mb-0">
						<Image
							src="/logo-full.png"
							alt="Salam Renewables"
							width={240}
							height={40}
							className="mb-4 max-w-full h-auto"
						/>
						<p className="text-sky-100 text-sm">
							Empowering homes and businesses with sustainable solar energy
							solutions.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-8">
						<div>
							<h4 className="text-lg font-semibold mb-2 text-sky-200">
								Contact Us
							</h4>
							<address className="text-sky-100 text-sm not-italic">
								<p>Old No.15/1, New No.23/1,</p>
								<p>Chamiers Road, Nandanam, Chennai,</p>
								<p>Tamil Nadu, India - 600035.</p>
								<p>Phone: +91-99402 57433</p>
								<p>Email: info@salamrenewables.com</p>
							</address>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-2 text-sky-200">
								Follow Us
							</h4>
							<div className="flex space-x-4">
								{[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
									<a
										key={index}
										href="#"
										className="text-sky-100 hover:text-white transition-colors"
										aria-label={`Social media link ${index + 1}`}
									>
										<Icon size={20} />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="border-t border-sky-600 mt-8 pt-4 text-center">
					<p className="text-sky-200 text-xs sm:text-sm">
						&copy; {currentYear} Salam Renewable Energy Private Limited. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
