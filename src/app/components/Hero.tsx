"use client";

import Image from "next/image";
import { Carousel } from "@/app/utils/util";
import Link from "next/link";

const Hero = () => {
	const images = ["/solar-new.jpg", "/solar-wind.jpg", "/solar.jpg"];

	return (
		<div className="relative w-full h-screen" id="hero">
			<Carousel
				autoplay={true}
				loop={true}
				autoplayDelay={5700}
				className="w-full h-full"
				navigation={({ setActiveIndex, activeIndex }) => (
					<div className="absolute bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-2">
						{images.map((_, i) => (
							<span
								key={i}
								className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
									activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
								}`}
								onClick={() => setActiveIndex(i)}
							/>
						))}
					</div>
				)}
				placeholder=""
				prevArrow={() => null}
				nextArrow={() => null}
				onPointerEnterCapture={() => {}}
				onPointerLeaveCapture={() => {}}
			>
				{images.map((image) => (
					<div key={image} className="relative w-full h-full">
						<Image
							src={image}
							alt="Solar Energy"
							fill
							style={{ objectFit: "cover" }}
							quality={100}
							priority
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50" />
						<HeroContent />
					</div>
				))}
			</Carousel>
		</div>
	);
};

const HeroContent = () => {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg">
					Empowering Communities with{" "}
					<span className="text-yellow-400">Solar</span>{" "}
					<span className="text-orange-500">Energy</span>
				</h1>
				<p className="text-lg sm:text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto drop-shadow-md">
					We supply clean solar power to local electricity providers, powering a
					sustainable future for all.
				</p>
				<Link
					href="#contact"
					className="bg-sky-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
				>
					Get in Touch
				</Link>
			</div>
		</div>
	);
};

export default Hero;
