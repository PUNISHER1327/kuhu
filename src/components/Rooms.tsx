import { useEffect, useRef, useState } from 'react';
import { Wifi, Car, Coffee, Bath, Bed, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import luxurySuiteImage from '@/assets/luxury-suite.jpg';

const Rooms = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
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

  const t = {
    en: {
      subtitle: 'Accommodation',
      title: 'Rooms & Suites',
      description: 'Each room and suite at Kuhu is thoughtfully designed to provide the perfect blend of comfort, luxury, and authentic Kerala charm, ensuring an unforgettable stay.',
      bookNow: 'Book Now',
      viewDetails: 'View Details',
      perNight: 'per night',
      needHelp: 'Need Help Choosing?',
      conciergeText: 'Our concierge team is available 24/7 to help you find the perfect accommodation for your stay.',
      speakToConcierge: 'Speak to Concierge'
    },
    kn: {
      subtitle: 'ವಸತಿ',
      title: 'ಕೊಠಡಿಗಳು ಮತ್ತು ಸೂಟ್‌ಗಳು',
      description: 'ಕುಹುದಲ್ಲಿನ ಪ್ರತಿಯೊಂದು ಕೊಠಡಿ ಮತ್ತು ಸೂಟ್ ಆರಾಮ, ಐಷಾರಾಮಿ ಮತ್ತು ಅಧಿಕೃತ ಕೇರಳ ಆಕರ್ಷಣೆಯ ಪರಿಪೂರ್ಣ ಮಿಶ್ರಣವನ್ನು ಒದಗಿಸಲು ಚಿಂತನಶೀಲವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ, ಮರೆಯಲಾಗದ ವಾಸವನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.',
      bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
      viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
      perNight: 'ಪ್ರತಿ ರಾತ್ರಿ',
      needHelp: 'ಆಯ್ಕೆ ಮಾಡಲು ಸಹಾಯ ಬೇಕೇ?',
      conciergeText: 'ನಿಮ್ಮ ವಾಸಕ್ಕಾಗಿ ಪರಿಪೂರ್ಣ ವಸತಿ ಹುಡುಕಲು ನಮ್ಮ ಕಾನ್ಸಿಯರ್ಜ್ ತಂಡ 24/7 ಲಭ್ಯವಿದೆ.',
      speakToConcierge: 'ಕಾನ್ಸಿಯರ್ಜ್ ಜೊತೆ ಮಾತನಾಡಿ'
    }
  };

  const translations = t[language];

  const rooms = [
    {
      id: 1,
      name: language === 'kn' ? 'ಬ್ಯಾಕ್ವಾಟರ್ ವಿಲ್ಲಾ' : 'Backwater Villa',
      type: language === 'kn' ? 'ಪ್ರೀಮಿಯಂ ಸೂಟ್' : 'Premium Suite',
      size: "75 sqm",
      guests: 2,
      price: "₹35,000",
      period: translations.perNight,
      image: luxurySuiteImage,
      amenities: language === 'kn' 
        ? ['ಖಾಸಗಿ ಪೂಲ್', 'ಬಟ್ಲರ್ ಸೇವೆ', 'ಬ್ಯಾಕ್ವಾಟರ್ ವೀಕ್ಷಣೆ', 'ಕಿಂಗ್ ಬೆಡ್']
        : ['Private Pool', 'Butler Service', 'Backwater View', 'King Bed'],
      features: [
        { icon: Wifi, label: language === 'kn' ? 'ಉಚಿತ ವೈಫೈ' : 'Free WiFi' },
        { icon: Car, label: language === 'kn' ? 'ವ್ಯಾಲೆಟ್ ಪಾರ್ಕಿಂಗ್' : 'Valet Parking' },
        { icon: Coffee, label: language === 'kn' ? 'ಮಿನಿ ಬಾರ್' : 'Mini Bar' },
        { icon: Bath, label: language === 'kn' ? 'ಐಷಾರಾಮಿ ಸ್ನಾನಗೃಹ' : 'Luxury Bath' }
      ],
      description: language === 'kn'
        ? 'ಕೇರಳದ ಪ್ರಾಚೀನ ನೀರಿನ ವಿಹಂಗಮ ನೋಟಗಳನ್ನು ಹೊಂದಿರುವ ನಮ್ಮ ಪ್ರಧಾನ ಬ್ಯಾಕ್ವಾಟರ್ ವಿಲ್ಲಾದಲ್ಲಿ ಶುದ್ಧ ಐಷಾರಾಮಿಯಲ್ಲಿ ಮುಳುಗಿ.'
        : 'Indulge in pure luxury with our premier backwater villa featuring panoramic views of Kerala\'s pristine waters.'
    },
    {
      id: 2,
      name: language === 'kn' ? 'ಗಾರ್ಡನ್ ಪೆವಿಲಿಯನ್' : 'Garden Pavilion',
      type: language === 'kn' ? 'ಡಿಲಕ್ಸ್ ರೂಮ್' : 'Deluxe Room',
      size: "55 sqm",
      guests: 2,
      price: "₹22,000",
      period: translations.perNight,
      image: luxurySuiteImage,
      amenities: language === 'kn'
        ? ['ತೋಟದ ನೋಟ', 'ಬಾಲ್ಕನಿ', 'ಮಾರ್ಬಲ್ ಸ್ನಾನಗೃಹ', 'ಕ್ವೀನ್ ಬೆಡ್']
        : ['Garden View', 'Balcony', 'Marble Bath', 'Queen Bed'],
      features: [
        { icon: Wifi, label: language === 'kn' ? 'ಉಚಿತ ವೈಫೈ' : 'Free WiFi' },
        { icon: Coffee, label: language === 'kn' ? 'ಕಾಫಿ ಯಂತ್ರ' : 'Coffee Machine' },
        { icon: Bath, label: language === 'kn' ? 'ಮಳೆ ಸ್ನಾನ' : 'Rain Shower' },
        { icon: Bed, label: language === 'kn' ? 'ಪ್ರೀಮಿಯಂ ಬೆಡ್ಡಿಂಗ್' : 'Premium Bedding' }
      ],
      description: language === 'kn'
        ? 'ಸೊಂಪಾದ ಉಷ್ಣವಲಯದ ತೋಟಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಕೇರಳ ವಾಸ್ತುಶಿಲ್ಪದಿಂದ ಸುತ್ತುವರಿದ ಸೊಗಸಾದ ಸೌಕರ್ಯದಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.'
        : 'Relax in elegant comfort surrounded by lush tropical gardens and traditional Kerala architecture.'
    },
    {
      id: 3,
      name: language === 'kn' ? 'ಪರಂಪರೆ ಸೂಟ್' : 'Heritage Suite',
      type: language === 'kn' ? 'ಕುಟುಂಬ ಸೂಟ್' : 'Family Suite',
      size: "95 sqm",
      guests: 4,
      price: "₹45,000",
      period: translations.perNight,
      image: luxurySuiteImage,
      amenities: language === 'kn'
        ? ['ಎರಡು ಮಲಗುವ ಕೋಣೆಗಳು', 'ವಾಸದ ಪ್ರದೇಶ', 'ಕಿಚನೆಟ್', 'ಸಾಂಸ್ಕೃತಿಕ ಅಲಂಕಾರ']
        : ['Two Bedrooms', 'Living Area', 'Kitchenette', 'Cultural Decor'],
      features: [
        { icon: Users, label: language === 'kn' ? 'ಕುಟುಂಬ ಕೊಠಡಿ' : 'Family Room' },
        { icon: Car, label: language === 'kn' ? 'ಆದ್ಯತೆ ಪಾರ್ಕಿಂಗ್' : 'Priority Parking' },
        { icon: Coffee, label: language === 'kn' ? 'ಪೂರ್ಣ ಅಡಿಗೆ' : 'Full Kitchen' },
        { icon: Bath, label: language === 'kn' ? 'ಡ್ಯುಯಲ್ ಸ್ನಾನಗೃಹಗಳು' : 'Dual Bathrooms' }
      ],
      description: language === 'kn'
        ? 'ಸಾಂಪ್ರದಾಯಿಕ ಅಂಶಗಳು ಮತ್ತು ಆಧುನಿಕ ಸೌಕರ್ಯದೊಂದಿಗೆ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ನಮ್ಮ ವಿಶಾಲವಾದ ಕುಟುಂಬ ಸೂಟ್‌ನಲ್ಲಿ ಕೇರಳದ ಶ್ರೀಮಂತ ಪರಂಪರೆಯನ್ನು ಅನುಭವಿಸಿ.'
        : 'Experience Kerala\'s rich heritage in our spacious family suite designed with traditional elements and modern comfort.'
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
            {translations.subtitle}
          </span>
          <h2 className="subheading-luxury mt-4 mb-6">
            {translations.title}
          </h2>
          <p className="body-luxury text-lg max-w-3xl mx-auto">
            {translations.description}
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
                    {translations.bookNow}
                  </Button>
                  <Button 
                    onClick={() => navigate('/rooms')}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {translations.viewDetails}
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
              {translations.needHelp}
            </h3>
            <p className="body-luxury mb-6 max-w-md">
              {translations.conciergeText}
            </p>
            <Button className="btn-secondary">
              {translations.speakToConcierge}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;