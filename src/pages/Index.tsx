import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Memories from "@/components/Memories";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-inter">
      <Hero />
      <About />
      <Stats />
      <Memories />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
