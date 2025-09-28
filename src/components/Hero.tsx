import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRooms = () => {
    const roomsSection = document.querySelector('#rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 parallax"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 animate-fade-in">
        <h1 className="heading-luxury text-white mb-6 animate-slide-up">
          Welcome to Kuhu
        </h1>
        <p className="text-xl md:text-2xl font-inter font-light mb-2 opacity-90 animate-slide-up">
          Luxury in the Heart of Kerala
        </p>
        <p className="text-lg font-inter mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Experience unparalleled elegance where the pristine backwaters meet world-class hospitality, 
          creating memories that last a lifetime in God's Own Country.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
          <Button className="btn-hero hover-glow">
            Book Your Stay
          </Button>
          <Button 
            onClick={scrollToRooms}
            className="btn-ghost border-white text-white hover:bg-white hover:text-primary"
          >
            Explore Rooms
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-secondary transition-smooth animate-float"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-inter mb-2 opacity-80">Discover More</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </button>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-16 w-12 h-12 bg-primary/30 rounded-full animate-float" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-accent/25 rounded-full animate-float" 
           style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;