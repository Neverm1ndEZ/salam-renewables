import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gradient-to-b from-sky-400 via-sky-700 to-sky-900 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="mb-8 md:mb-0">
						<Image
							src="/logo-full.png"
							alt="Salam Renewables"
							width={240}
							height={40}
							className="mb-4"
						/>
						<p className="text-sky-100">
							Empowering homes and businesses with sustainable solar energy
							solutions.
						</p>
					</div>
					<div>
						<h4 className="text-xl font-semibold mb-4 text-sky-200">
							Quick Links
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-sky-100 hover:text-white transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#features"
									className="text-sky-100 hover:text-white transition-colors"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="text-sky-100 hover:text-white transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-xl font-semibold mb-4 text-sky-200">
							Contact Us
						</h4>
						<p className="text-sky-100">123 Solar Street</p>
						<p className="text-sky-100">Sunshine City, SC 12345</p>
						<p className="text-sky-100">Phone: (555) 123-4567</p>
						<p className="text-sky-100">Email: info@solarrenew.com</p>
					</div>
					<div>
						<h4 className="text-xl font-semibold mb-4 text-sky-200">
							Follow Us
						</h4>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-sky-100 hover:text-white transition-colors"
							>
								<Facebook size={24} />
							</a>
							<a
								href="#"
								className="text-sky-100 hover:text-white transition-colors"
							>
								<Twitter size={24} />
							</a>
							<a
								href="#"
								className="text-sky-100 hover:text-white transition-colors"
							>
								<Instagram size={24} />
							</a>
							<a
								href="#"
								className="text-sky-100 hover:text-white transition-colors"
							>
								<Linkedin size={24} />
							</a>
						</div>
					</div>
				</div>
				<div className="border-t border-sky-600 mt-8 pt-8 text-center">
					<p className="text-sky-200">
						&copy; {currentYear} Salam Renewable Energy Private Limited. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
