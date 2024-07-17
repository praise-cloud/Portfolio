import Image from "next/image";
import { Hero } from "./pages/Hero/Hero";
import { Tools } from "./pages/Tools/Tools";
import { Profile } from "./pages/Profile/Profile";
import { Projects } from "./pages/Project/Projects";
import { Pricing } from "./pages/Pricing/Pricing";
import { Contact } from "./pages/Contact/Contact";
import { Footer } from "./pages/Footer/Footer";

export default function Home() {
  return (
    <>
    <Hero />
    <Tools />
    <Profile />
    <Projects />
    <Pricing />
    <Contact />
    <Footer />
    </>
  );
}
