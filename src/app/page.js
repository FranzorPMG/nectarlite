import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import WorkingProcess from "./components/WorkingProcess";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <WorkingProcess />
      <Projects />
      <Pricing />
      <Testimonials />
      <Blog />
      <SubFooter />
      <Footer />
    </div>
  );
}
