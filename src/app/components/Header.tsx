"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-[#3772EB] shadow-md" : "bg-transparent"
			}`}
		>
			<nav className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Image src="/logo-short.png" alt="logo-ct" width={70} height={0} />
				<Link
					href="/"
					className={`text-2xl font-bold text-sky-600 hover:text-sky-700 transition-colors ${
						isScrolled ? "text-white" : ""
					}`}
				>
					Salam Renewables
				</Link>
			</nav>
		</header>
	);
};

export default Header;
