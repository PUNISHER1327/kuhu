import { useEffect, useRef, useState } from 'react';
import { Wifi, Car, Coffee, Bath, Bed, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import luxurySuiteImage from '@/assets/luxury-suite.jpg';

const Rooms = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

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

  const rooms = [
    {
      id: 1,
      name: "Backwater Villa",
      type: "Premium Suite",
      size: "75 sqm",
      guests: 2,
      price: "₹35,000",
      period: "per night",
      image: luxurySuiteImage,
      amenities: ["Private Pool", "Butler Service", "Backwater View", "King Bed"],
      features: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Car, label: "Valet Parking" },
        { icon: Coffee, label: "Mini Bar" },
        { icon: Bath, label: "Luxury Bath" }
      ],
      description: "Indulge in pure luxury with our premier backwater villa featuring panoramic views of Kerala's pristine waters."
    },
    {
      id: 2,
      name: "Garden Pavilion",
      type: "Deluxe Room",
      size: "55 sqm",
      guests: 2,
      price: "₹22,000",
      period: "per night",
      image: luxurySuiteImage,
      amenities: ["Garden View", "Balcony", "Marble Bath", "Queen Bed"],
      features: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Coffee, label: "Coffee Machine" },
        { icon: Bath, label: "Rain Shower" },
        { icon: Bed, label: "Premium Bedding" }
      ],
      description: "Relax in elegant comfort surrounded by lush tropical gardens and traditional Kerala architecture."
    },
    {
      id: 3,
      name: "Heritage Suite",
      type: "Family Suite",
      size: "95 sqm",
      guests: 4,
      price: "₹45,000",
      period: "per night",
      image: luxurySuiteImage,
      amenities: ["Two Bedrooms", "Living Area", "Kitchenette", "Cultural Decor"],
      features: [
        { icon: Users, label: "Family Room" },
        { icon: Car, label: "Priority Parking" },
        { icon: Coffee, label: "Full Kitchen" },
        { icon: Bath, label: "Dual Bathrooms" }
      ],
      description: "Experience Kerala's rich heritage in our spacious family suite designed with traditional elements and modern comfort."
    }
  ];

  const handleBookRoom = (roomId: number) => {
    // Add booking logic here
    console.log(`Booking room ${roomId}`);
  };

  return (
    <section id="rooms" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="text-secondary font-inter font-semibold tracking-wider uppercase text-sm">
            Accommodation
          </span>
          <h2 className="subheading-luxury mt-4 mb-6">
            Rooms & Suites
          </h2>
          <p className="body-luxury text-lg max-w-3xl mx-auto">
            Each room and suite at Kuhu is thoughtfully designed to provide the perfect blend of comfort, 
            luxury, and authentic Kerala charm, ensuring an unforgettable stay.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={room.id}
              className="animate-on-scroll opacity-0 luxury-card overflow-hidden group cursor-pointer"
              onMouseEnter={() => setSelectedRoom(room.id)}
              onMouseLeave={() => setSelectedRoom(null)}
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-40 transition-smooth" />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {room.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {room.size}
                  </span>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-playfair font-semibold text-xl text-foreground">
                    {room.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-playfair font-bold text-primary">
                      {room.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {room.period}
                    </div>
                  </div>
                </div>

                <p className="body-luxury text-sm mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, idx) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={idx} className="flex items-center space-x-2">
                        <IconComponent size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <span 
                        key={idx}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="text-xs text-primary">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    onClick={() => handleBookRoom(room.id)}
                    className="w-full btn-hero"
                  >
                    Book Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll opacity-0">
          <div className="luxury-card p-8 inline-block">
            <h3 className="font-playfair font-semibold text-2xl mb-4 text-foreground">
              Need Help Choosing?
            </h3>
            <p className="body-luxury mb-6 max-w-md">
              Our concierge team is available 24/7 to help you find the perfect accommodation for your stay.
            </p>
            <Button className="btn-secondary">
              Speak to Concierge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;