import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWeDoIt from "./components/HowWeDoIt";
import MissionVision from "./components/MissionVision";
import { OurValues } from "./components/OurValues";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<Features />
			<MissionVision />
			<HowWeDoIt />
			<OurValues />
			<Contact />
			<Footer />
		</main>
	);
}
