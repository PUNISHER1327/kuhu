import { useEffect, useRef } from 'react';
import { Flower, Clock, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import spaImage from '@/assets/spa-treatment.jpg';

const Spa = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-slide-up');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const treatments = [
    {
      name: "Ayurvedic Abhyanga",
      duration: "90 minutes",
      price: "₹8,500",
      description: "Traditional full-body massage with warm herbal oils, promoting deep relaxation and detoxification.",
      icon: Flower
    },
    {
      name: "Kerala Pizhichil",
      duration: "120 minutes", 
      price: "₹12,000",
      description: "Royal treatment combining oil massage and gentle pouring of medicated oils for ultimate rejuvenation.",
      icon: Sparkles
    },
    {
      name: "Couple's Harmony",
      duration: "75 minutes",
      price: "₹15,000",
      description: "Romantic couples massage in our private pavilion overlooking the tranquil backwaters.",
      icon: Users
    }
  ];

  const facilities = [
    "Traditional Treatment Rooms",
    "Steam & Sauna Chambers", 
    "Meditation Garden",
    "Ayurvedic Consultation",
    "Yoga Pavilion",
    "Herbal Steam Bath"
  ];

  return (
    <section id="spa" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="text-secondary font-inter font-semibold tracking-wider uppercase text-sm">
            Wellness & Rejuvenation
          </span>
          <h2 className="subheading-luxury mt-4 mb-6">
            Kuhu Spa & Wellness
          </h2>
          <p className="body-luxury text-lg max-w-3xl mx-auto">
            Discover the ancient healing traditions of Kerala through our authentic Ayurvedic treatments and 
            modern wellness therapies, designed to restore balance and harmony to your body and mind.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Spa Image */}
          <div className="animate-on-scroll opacity-0">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={spaImage} 
                alt="Spa Treatment Room"
                className="w-full h-96 object-cover transition-smooth hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20" />
            </div>
          </div>

          {/* Spa Description */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-playfair font-semibold text-3xl mb-6 text-foreground">
              Ancient Wisdom, Modern Comfort
            </h3>
            <p className="body-luxury text-lg mb-6">
              Our spa draws inspiration from Kerala's 5,000-year-old Ayurvedic tradition, 
              offering authentic treatments performed by skilled therapists trained in ancient healing arts.
            </p>
            <p className="body-luxury mb-8">
              Each treatment is personalized based on your individual constitution and wellness goals, 
              using pure, locally-sourced herbs and oils prepared according to traditional methods.
            </p>

            {/* Facilities Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {facility}
                  </span>
                </div>
              ))}
            </div>

            <Button className="btn-hero">
              Book Consultation
            </Button>
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <div 
                key={treatment.name}
                className="animate-on-scroll opacity-0 luxury-card p-6 group hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <IconComponent size={20} className="text-secondary-foreground" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {treatment.duration}
                    </span>
                  </div>
                </div>

                <h3 className="font-playfair font-semibold text-xl mb-2 text-foreground">
                  {treatment.name}
                </h3>
                
                <p className="body-luxury text-sm mb-4 leading-relaxed">
                  {treatment.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-playfair font-bold text-primary">
                    {treatment.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary-hover text-primary-foreground transition-smooth"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wellness Philosophy */}
        <div className="animate-on-scroll opacity-0 text-center">
          <div className="luxury-card p-12 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Flower size={32} className="text-primary-foreground" />
            </div>
            <h3 className="font-playfair font-semibold text-3xl mb-6 text-foreground">
              Our Wellness Philosophy
            </h3>
            <p className="body-luxury text-lg mb-6">
              At Kuhu Spa, we believe that true wellness comes from the harmony between mind, body, and spirit. 
              Our treatments are designed not just to pamper, but to heal, restore, and rejuvenate from within.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Years of Tradition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Natural Ingredients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Wellness Concierge</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spa;