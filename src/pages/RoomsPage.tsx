import { useState, useEffect } from 'react';
import { Wifi, Car, Coffee, Bath, Bed, Users, Tv, Wind, Shield, Sparkles, Home, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import luxurySuiteImage from '@/assets/luxury-suite.jpg';
import { useNavigate } from 'react-router-dom';

const RoomsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    en: {
      title: 'Rooms & Suites',
      subtitle: 'Discover Your Perfect Stay',
      description: 'Experience unparalleled luxury in our carefully curated collection of rooms and suites, each designed to provide the ultimate comfort and authentic Kerala experience.',
      categories: {
        all: 'All Rooms',
        villa: 'Villas',
        suite: 'Suites',
        deluxe: 'Deluxe Rooms',
        premium: 'Premium Rooms'
      },
      bookNow: 'Book Now',
      viewDetails: 'View Details',
      perNight: 'per night',
      size: 'Size',
      guests: 'Guests',
      amenities: 'Amenities',
      features: 'Features'
    },
    kn: {
      title: 'ಕೊಠಡಿಗಳು ಮತ್ತು ಸೂಟ್‌ಗಳು',
      subtitle: 'ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ವಾಸವನ್ನು ಅನ್ವೇಷಿಸಿ',
      description: 'ನಮ್ಮ ಎಚ್ಚರಿಕೆಯಿಂದ ಆಯ್ಕೆ ಮಾಡಿದ ಕೊಠಡಿಗಳು ಮತ್ತು ಸೂಟ್‌ಗಳ ಸಂಗ್ರಹದಲ್ಲಿ ಅಪ್ರತಿಮ ಐಷಾರಾಮಿ ಅನುಭವಿಸಿ, ಪ್ರತಿಯೊಂದೂ ಅತ್ಯುತ್ತಮ ಸೌಕರ್ಯ ಮತ್ತು ಅಧಿಕೃತ ಕೇರಳ ಅನುಭವವನ್ನು ಒದಗಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.',
      categories: {
        all: 'ಎಲ್ಲಾ ಕೊಠಡಿಗಳು',
        villa: 'ವಿಲ್ಲಾಗಳು',
        suite: 'ಸೂಟ್‌ಗಳು',
        deluxe: 'ಡಿಲಕ್ಸ್ ಕೊಠಡಿಗಳು',
        premium: 'ಪ್ರೀಮಿಯಂ ಕೊಠಡಿಗಳು'
      },
      bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
      viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
      perNight: 'ಪ್ರತಿ ರಾತ್ರಿ',
      size: 'ಗಾತ್ರ',
      guests: 'ಅತಿಥಿಗಳು',
      amenities: 'ಸೌಲಭ್ಯಗಳು',
      features: 'ವೈಶಿಷ್ಟ್ಯಗಳು'
    }
  };

  const t = translations[language];

  const rooms = [
    {
      id: 1,
      name: language === 'kn' ? 'ಬ್ಯಾಕ್ವಾಟರ್ ವಿಲ್ಲಾ' : 'Backwater Villa',
      type: language === 'kn' ? 'ಪ್ರೀಮಿಯಂ ಸೂಟ್' : 'Premium Suite',
      category: 'villa',
      size: '75 sqm',
      guests: 2,
      price: '₹35,000',
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
      category: 'deluxe',
      size: '55 sqm',
      guests: 2,
      price: '₹22,000',
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
      category: 'suite',
      size: '95 sqm',
      guests: 4,
      price: '₹45,000',
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
    },
    {
      id: 4,
      name: language === 'kn' ? 'ರಾಯಲ್ ಪೆಂಟ್ಹೌಸ್' : 'Royal Penthouse',
      type: language === 'kn' ? 'ಅಲ್ಟ್ರಾ ಪ್ರೀಮಿಯಂ' : 'Ultra Premium',
      category: 'suite',
      size: '150 sqm',
      guests: 6,
      price: '₹85,000',
      image: luxurySuiteImage,
      amenities: language === 'kn' 
        ? ['ಖಾಸಗಿ ಟೆರೇಸ್', 'ಜಕುಝಿ', 'ಪರ್ಸನಲ್ ಬಟ್ಲರ್', 'ಸಿನೆಮಾ ರೂಮ್'] 
        : ['Private Terrace', 'Jacuzzi', 'Personal Butler', 'Cinema Room'],
      features: [
        { icon: Sparkles, label: language === 'kn' ? 'ಐಷಾರಾಮಿ ಅಂಗೀಕಾರ' : 'Luxury Amenities' },
        { icon: Tv, label: language === 'kn' ? 'ಸ್ಮಾರ್ಟ್ ಹೋಮ್' : 'Smart Home' },
        { icon: Wind, label: language === 'kn' ? 'ಎಸಿ' : 'Climate Control' },
        { icon: Shield, label: language === 'kn' ? 'ಖಾಸಗಿ ಭದ್ರತೆ' : 'Private Security' }
      ],
      description: language === 'kn' 
        ? 'ಅಂತಿಮ ಐಷಾರಾಮಿ: ವಿಹಂಗಮ ನೋಟಗಳು, ಖಾಸಗಿ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಸೇವೆಯ ಅತ್ಯುತ್ತಮತೆ.'
        : 'Ultimate luxury: panoramic views, private facilities, and excellence in service.'
    },
    {
      id: 5,
      name: language === 'kn' ? 'ಕೊಕೊನಟ್ ಗ್ರೋವ್ ವಿಲ್ಲಾ' : 'Coconut Grove Villa',
      type: language === 'kn' ? 'ಪ್ರೀಮಿಯಂ ವಿಲ್ಲಾ' : 'Premium Villa',
      category: 'villa',
      size: '85 sqm',
      guests: 3,
      price: '₹38,000',
      image: luxurySuiteImage,
      amenities: language === 'kn' 
        ? ['ತೆಂಗಿನ ತೋಟದ ನೋಟ', 'ಔಟ್ಡೋರ್ ಶವರ್', 'ಯೋಗ ಡೆಕ್', 'ಖಾಸಗಿ ಪೂಲ್'] 
        : ['Coconut Grove View', 'Outdoor Shower', 'Yoga Deck', 'Private Pool'],
      features: [
        { icon: Home, label: language === 'kn' ? 'ಏಕಾಂತ ಸ್ಥಳ' : 'Secluded Location' },
        { icon: Wifi, label: language === 'kn' ? 'ಹೈ-ಸ್ಪೀಡ್ ವೈಫೈ' : 'High-Speed WiFi' },
        { icon: Coffee, label: language === 'kn' ? 'ಪ್ರೀಮಿಯಂ ಮಿನಿಬಾರ್' : 'Premium Minibar' },
        { icon: Bath, label: language === 'kn' ? 'ಸ್ಪಾ ಬಾತ್' : 'Spa Bath' }
      ],
      description: language === 'kn' 
        ? 'ತೆಂಗಿನ ತೋಟಗಳ ನಡುವೆ ನೆಲೆಸಿರುವ ಖಾಸಗಿ ವಿಲ್ಲಾ, ಪ್ರಶಾಂತತೆ ಮತ್ತು ಐಷಾರಾಮಿಯನ್ನು ನೀಡುತ್ತದೆ.'
        : 'Private villa nestled among coconut groves, offering tranquility and luxury.'
    },
    {
      id: 6,
      name: language === 'kn' ? 'ಲೇಕ್‌ಸೈಡ್ ಪ್ರೀಮಿಯಂ' : 'Lakeside Premium',
      type: language === 'kn' ? 'ಪ್ರೀಮಿಯಂ ರೂಮ್' : 'Premium Room',
      category: 'premium',
      size: '60 sqm',
      guests: 2,
      price: '₹28,000',
      image: luxurySuiteImage,
      amenities: language === 'kn' 
        ? ['ಸರೋವರದ ನೋಟ', 'ಖಾಸಗಿ ಬಾಲ್ಕನಿ', 'ಪ್ರೀಮಿಯಂ ಬೆಡ್ಡಿಂಗ್', 'ಮಿನಿ ಲೈಬ್ರರಿ'] 
        : ['Lake View', 'Private Balcony', 'Premium Bedding', 'Mini Library'],
      features: [
        { icon: Mountain, label: language === 'kn' ? 'ನೈಸರ್ಗಿಕ ನೋಟ' : 'Scenic View' },
        { icon: Wifi, label: language === 'kn' ? 'ಉಚಿತ ವೈಫೈ' : 'Free WiFi' },
        { icon: Tv, label: language === 'kn' ? 'ಸ್ಮಾರ್ಟ್ ಟಿವಿ' : 'Smart TV' },
        { icon: Coffee, label: language === 'kn' ? 'ಕಾಫಿ ಯಂತ್ರ' : 'Coffee Machine' }
      ],
      description: language === 'kn' 
        ? 'ಸುಂದರವಾದ ಸರೋವರದ ನೋಟಗಳೊಂದಿಗೆ ಪ್ರೀಮಿಯಂ ಕೊಠಡಿ, ಶಾಂತತೆಗಾಗಿ ಪರಿಪೂರ್ಣ.'
        : 'Premium room with beautiful lake views, perfect for tranquility.'
    },
    {
      id: 7,
      name: language === 'kn' ? 'ಪ್ಯಾಲೇಸ್ ಸೂಟ್' : 'Palace Suite',
      type: language === 'kn' ? 'ಲಕ್ಷರಿ ಸೂಟ್' : 'Luxury Suite',
      category: 'suite',
      size: '110 sqm',
      guests: 4,
      price: '₹58,000',
      image: luxurySuiteImage,
      amenities: language === 'kn' 
        ? ['ಸೆಪರೇಟ್ ಲಿವಿಂಗ್', 'ಡೈನಿಂಗ್ ಏರಿಯಾ', 'ವರ್ಕ್ ಸ್ಪೇಸ್', 'ವಾಕ್-ಇನ್ ವಾರ್ಡ್ರೋಬ್'] 
        : ['Separate Living', 'Dining Area', 'Work Space', 'Walk-in Wardrobe'],
      features: [
        { icon: Sparkles, label: language === 'kn' ? 'ಪ್ರೀಮಿಯಂ ಅಂಗೀಕಾರ' : 'Premium Amenities' },
        { icon: Wifi, label: language === 'kn' ? 'ಫೈಬರ್ ವೈಫೈ' : 'Fiber WiFi' },
        { icon: Bath, label: language === 'kn' ? 'ಮಾರ್ಬಲ್ ಬಾತ್' : 'Marble Bath' },
        { icon: Bed, label: language === 'kn' ? 'ಕಿಂಗ್ ಬೆಡ್' : 'King Bed' }
      ],
      description: language === 'kn' 
        ? 'ರಾಜಮನೆಯಂತಹ ಸೂಟ್ ಐಷಾರಾಮಿ ಮತ್ತು ಜಾಗವನ್ನು ವಿಲೀನಗೊಳಿಸುತ್ತದೆ.'
        : 'Palace-like suite merging luxury and space.'
    },
    {
      id: 8,
      name: language === 'kn' ? 'ಸನ್ಸೆಟ್ ಪೆವಿಲಿಯನ್' : 'Sunset Pavilion',
      type: language === 'kn' ? 'ಡಿಲಕ್ಸ್ ರೂಮ್' : 'Deluxe Room',
      category: 'deluxe',
      size: '50 sqm',
      guests: 2,
      price: '₹20,000',
      image: luxurySuiteImage,
      amenities: language === 'kn' 
        ? ['ಸೂರ್ಯಾಸ್ತ ನೋಟ', 'ಬಾಲ್ಕನಿ ಆಸನ', 'ಮಿನಿ ರೆಫ್ರಿಜರೇಟರ್', 'ಕ್ವೀನ್ ಬೆಡ್'] 
        : ['Sunset View', 'Balcony Seating', 'Mini Refrigerator', 'Queen Bed'],
      features: [
        { icon: Wifi, label: language === 'kn' ? 'ವೈಫೈ' : 'WiFi' },
        { icon: Tv, label: language === 'kn' ? 'ಸ್ಯಾಟಲೈಟ್ ಟಿವಿ' : 'Satellite TV' },
        { icon: Coffee, label: language === 'kn' ? 'ಕಾಫಿ/ಟೀ' : 'Coffee/Tea' },
        { icon: Bath, label: language === 'kn' ? 'ಶವರ್' : 'Shower' }
      ],
      description: language === 'kn' 
        ? 'ಸುಂದರವಾದ ಸೂರ್ಯಾಸ್ತದ ನೋಟಗಳೊಂದಿಗೆ ಸೊಗಸಾದ ಡಿಲಕ್ಸ್ ಕೊಠಡಿ.'
        : 'Elegant deluxe room with beautiful sunset views.'
    },
    {
      id: 9,
      name: language === 'kn' ? 'ಟ್ರೀಹೌಸ್ ವಿಲ್ಲಾ' : 'Treehouse Villa',
      type: language === 'kn' ? 'ಯುನೀಕ್ ವಿಲ್ಲಾ' : 'Unique Villa',
      category: 'villa',
      size: '70 sqm',
      guests: 2,
      price: '₹42,000',
      image: luxurySuiteImage,
      amenities: language === 'kn' 
        ? ['ಟ್ರೀಟಾಪ್ ವೀಕ್ಷಣೆ', 'ಸ್ಕೈ ಡೆಕ್', 'ಮರದ ಪೀಠೋಪಕರಣಗಳು', 'ಬರ್ಡ್ ವಾಚಿಂಗ್'] 
        : ['Treetop View', 'Sky Deck', 'Wooden Furniture', 'Bird Watching'],
      features: [
        { icon: Home, label: language === 'kn' ? 'ಏಕಾಂತ' : 'Secluded' },
        { icon: Wifi, label: language === 'kn' ? 'ವೈಫೈ' : 'WiFi' },
        { icon: Coffee, label: language === 'kn' ? 'ಮಿನಿಬಾರ್' : 'Minibar' },
        { icon: Bath, label: language === 'kn' ? 'ಔಟ್ಡೋರ್ ಬಾತ್' : 'Outdoor Bath' }
      ],
      description: language === 'kn' 
        ? 'ಮರದ ಮೇಲಿನ ವಿಶಿಷ್ಟವಾದ ವಿಲ್ಲಾ ಅನುಭವ, ಪ್ರಕೃತಿಯೊಂದಿಗೆ ಒಂದಾಗಿ.'
        : 'Unique treetop villa experience, one with nature.'
    }
  ];

  const categories = [
    { key: 'All', label: t.categories.all },
    { key: 'villa', label: t.categories.villa },
    { key: 'suite', label: t.categories.suite },
    { key: 'deluxe', label: t.categories.deluxe },
    { key: 'premium', label: t.categories.premium }
  ];

  const filteredRooms = selectedCategory === 'All' 
    ? rooms 
    : rooms.filter(room => room.category === selectedCategory);

  const handleBookRoom = (roomId: number) => {
    console.log(`Booking room ${roomId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-secondary font-inter font-semibold tracking-wider uppercase text-sm">
              {language === 'kn' ? 'ಅನ್ವೇಷಿಸಿ' : 'Discover'}
            </span>
            <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-6 text-foreground mt-4">
              {t.title}
            </h1>
            <p className="text-xl font-playfair italic text-muted-foreground mb-4">
              {t.subtitle}
            </p>
            <p className="body-luxury text-lg">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/30 sticky top-20 z-10 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-smooth ${
                  selectedCategory === category.key
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <div 
                key={room.id}
                className="luxury-card overflow-hidden group cursor-pointer hover-lift"
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
                    <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <Home size={14} />
                      <span>{room.size}</span>
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
                        {t.perNight}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                    <Users size={16} />
                    <span>{room.guests} {t.guests}</span>
                  </div>

                  <p className="body-luxury text-sm mb-4 leading-relaxed line-clamp-2">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {room.features.map((feature, idx) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={idx} className="flex items-center space-x-2">
                          <IconComponent size={14} className="text-primary" />
                          <span className="text-xs text-muted-foreground">
                            {feature.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 2).map((amenity, idx) => (
                        <span 
                          key={idx}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                        >
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 2 && (
                        <span className="text-xs text-primary">
                          +{room.amenities.length - 2}
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
                      {t.bookNow}
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {t.viewDetails}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomsPage;
