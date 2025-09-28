import { useEffect, useRef } from 'react';
import { Leaf, Award, Heart, Star } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: Leaf,
      title: "Eco-Luxury",
      description: "Sustainable luxury that honors Kerala's natural beauty"
    },
    {
      icon: Award,
      title: "World-Class Service",
      description: "Personalized experiences crafted by our dedicated team"
    },
    {
      icon: Heart,
      title: "Cultural Heritage",
      description: "Immerse yourself in authentic Kerala traditions"
    },
    {
      icon: Star,
      title: "Exclusive Location",
      description: "Prime position on the pristine backwaters of Kerala"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0">
              <span className="text-secondary font-inter font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="subheading-luxury mt-4 mb-6">
                Where Tradition Meets Luxury
              </h2>
              <p className="body-luxury text-lg mb-6">
                Nestled in the heart of Kerala's enchanting backwaters, Kuhu represents the perfect harmony 
                between time-honored traditions and contemporary luxury. Our resort is more than a destination—it's 
                a gateway to experiencing the soul of God's Own Country.
              </p>
              <p className="body-luxury">
                From the moment you arrive, you'll be embraced by the warmth of Kerala hospitality, 
                surrounded by lush landscapes, and pampered with world-class amenities that celebrate 
                both local culture and international standards of excellence.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-on-scroll opacity-0">
            <div className="luxury-card p-8 text-center">
              <div className="w-24 h-24 bg-gradient-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart size={40} className="text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                A Legacy of Excellence
              </h3>
              <p className="body-luxury">
                Since our founding, we've been committed to creating unforgettable experiences 
                that capture the essence of Kerala's natural beauty and rich cultural heritage.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Luxury Suites</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-secondary">15</div>
                  <div className="text-sm text-muted-foreground">Acres Paradise</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="animate-on-scroll opacity-0 luxury-card p-6 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <IconComponent size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="body-luxury text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;