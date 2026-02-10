import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experiences from "@/sections/Experiences";
import Education from "@/sections/Education";
import Certificates from "@/sections/Certificates";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

const Index = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Education />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
