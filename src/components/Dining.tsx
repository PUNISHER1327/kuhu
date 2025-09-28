import { useEffect, useRef } from 'react';
import { Clock, Star, ChefHat, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import diningImage from '@/assets/fine-dining.jpg';

const Dining = () => {
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
              }, index * 150);
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

  const restaurants = [
    {
      name: "Spice Route",
      cuisine: "Contemporary Kerala",
      timing: "6:30 PM - 11:00 PM",
      rating: 4.9,
      description: "Authentic Kerala flavors reimagined with modern culinary techniques in an elegant waterfront setting.",
      specialties: ["Kerala Fish Curry", "Appam & Stew", "Malabar Biryani", "Coconut Prawns"],
      icon: ChefHat,
      image: diningImage
    },
    {
      name: "Monsoon Terrace",
      cuisine: "International & Asian",
      timing: "12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM",
      rating: 4.8,
      description: "Open-air dining with panoramic backwater views, featuring fresh seafood and international delicacies.",
      specialties: ["Grilled Lobster", "Sushi Selection", "Wood-fired Pizza", "Thai Curries"],
      icon: Wine,
      image: diningImage
    },
    {
      name: "Café Cascade",
      cuisine: "Light Bites & Beverages", 
      timing: "6:00 AM - 11:00 PM",
      rating: 4.7,
      description: "Casual all-day dining by the pool with freshly brewed coffee, healthy smoothies, and light meals.",
      specialties: ["Artisan Coffee", "Fresh Smoothies", "Healthy Bowls", "Gourmet Sandwiches"],
      icon: Star,
      image: diningImage
    }
  ];

  const culinaryExperiences = [
    {
      title: "Chef's Table Experience",
      duration: "3 hours",
      price: "₹15,000 per person",
      description: "Intimate 7-course tasting menu with wine pairings, prepared by our executive chef."
    },
    {
      title: "Backwater Sunset Cruise",
      duration: "2 hours", 
      price: "₹8,500 per person",
      description: "Romantic dinner cruise with traditional Kerala cuisine served on our private houseboat."
    },
    {
      title: "Spice Garden Tour & Cooking",
      duration: "4 hours",
      price: "₹6,000 per person", 
      description: "Guided tour of local spice gardens followed by hands-on cooking class with our chef."
    }
  ];

  return (
    <section id="dining" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="text-secondary font-inter font-semibold tracking-wider uppercase text-sm">
            Culinary Excellence
          </span>
          <h2 className="subheading-luxury mt-4 mb-6">
            Dining Experiences
          </h2>
          <p className="body-luxury text-lg max-w-3xl mx-auto">
            Embark on a gastronomic journey that celebrates the rich flavors of Kerala while embracing 
            international culinary traditions, all set against breathtaking backwater vistas.
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {restaurants.map((restaurant, index) => {
            const IconComponent = restaurant.icon;
            return (
              <div 
                key={restaurant.name}
                className="animate-on-scroll opacity-0 luxury-card overflow-hidden group"
              >
                {/* Restaurant Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-30 transition-smooth" />
                  <div className="absolute top-4 right-4 bg-background/90 rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star size={14} className="text-secondary fill-current" />
                    <span className="text-sm font-semibold text-foreground">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>

                {/* Restaurant Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-playfair font-semibold text-xl text-foreground">
                      {restaurant.name}
                    </h3>
                    <IconComponent size={20} className="text-primary" />
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-primary font-medium">
                      {restaurant.cuisine}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {restaurant.timing}
                      </span>
                    </div>
                  </div>

                  <p className="body-luxury text-sm mb-4 leading-relaxed">
                    {restaurant.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-inter font-semibold text-sm mb-2 text-foreground">
                      Signature Dishes
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {restaurant.specialties.slice(0, 3).map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                      {restaurant.specialties.length > 3 && (
                        <span className="text-xs text-primary">
                          +{restaurant.specialties.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="flex-1 btn-hero"
                    >
                      Reserve Table
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View Menu
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Culinary Experiences */}
        <div className="animate-on-scroll opacity-0">
          <div className="text-center mb-12">
            <h3 className="font-playfair font-semibold text-3xl mb-4 text-foreground">
              Exclusive Culinary Experiences
            </h3>
            <p className="body-luxury text-lg max-w-2xl mx-auto">
              Elevate your dining experience with our curated culinary adventures, 
              designed to immerse you in the authentic flavors and traditions of Kerala.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {culinaryExperiences.map((experience, index) => (
              <div 
                key={experience.title}
                className="luxury-card p-6 text-center group hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <ChefHat size={24} className="text-secondary-foreground" />
                </div>
                <h4 className="font-playfair font-semibold text-lg mb-2 text-foreground">
                  {experience.title}
                </h4>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Clock size={14} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {experience.duration}
                  </span>
                </div>
                <p className="body-luxury text-sm mb-4">
                  {experience.description}
                </p>
                <div className="text-xl font-playfair font-bold text-primary mb-4">
                  {experience.price}
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  Book Experience
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Dining Philosophy */}
        <div className="animate-on-scroll opacity-0 mt-20 text-center">
          <div className="luxury-card p-10 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Wine size={32} className="text-primary-foreground" />
            </div>
            <h3 className="font-playfair font-semibold text-3xl mb-6 text-foreground">
              Farm to Table Philosophy
            </h3>
            <p className="body-luxury text-lg">
              We source the freshest ingredients from local farmers and fishermen, ensuring that every dish 
              celebrates the authentic flavors of Kerala while supporting our community. Our chefs work closely 
              with local suppliers to bring you seasonal specialties that showcase the region's incredible biodiversity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;