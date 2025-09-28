import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Dining from "@/components/Dining";
import Spa from "@/components/Spa";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Rooms />
      <Dining />
      <Spa />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
