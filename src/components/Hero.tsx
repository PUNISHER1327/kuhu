import { ChevronDown, Search, Calendar, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-bg.mp4';

const Hero = () => {
  const { language } = useLanguage();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [resort, setResort] = useState('');

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = () => {
    console.log('Search:', { resort, checkIn, checkOut, adults, children });
  };

  const t = {
    en: {
      discover: 'Discover More',
      resort: 'Resort / Villa',
      selectResort: 'Select a resort',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      selectDate: 'Select date',
      guests: 'Guests',
      adults: 'Adult',
      adults_plural: 'Adults',
      children: 'Child',
      children_plural: 'Children',
      search: 'Search Availability',
      resorts: {
        backwaters: 'Kuhu Backwaters Villa',
        hillside: 'Kuhu Hillside Resort',
        beachfront: 'Kuhu Beachfront Resort',
        heritage: 'Kuhu Heritage Suite'
      }
    },
    kn: {
      discover: 'ಇನ್ನಷ್ಟು ಅನ್ವೇಷಿಸಿ',
      resort: 'ರೆಸಾರ್ಟ್ / ವಿಲ್ಲಾ',
      selectResort: 'ರೆಸಾರ್ಟ್ ಆಯ್ಕೆಮಾಡಿ',
      checkIn: 'ಚೆಕ್-ಇನ್',
      checkOut: 'ಚೆಕ್-ಔಟ್',
      selectDate: 'ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ',
      guests: 'ಅತಿಥಿಗಳು',
      adults: 'ವಯಸ್ಕ',
      adults_plural: 'ವಯಸ್ಕರು',
      children: 'ಮಗು',
      children_plural: 'ಮಕ್ಕಳು',
      search: 'ಲಭ್ಯತೆ ಹುಡುಕಿ',
      resorts: {
        backwaters: 'ಕುಹು ಬ್ಯಾಕ್ವಾಟರ್ಸ್ ವಿಲ್ಲಾ',
        hillside: 'ಕುಹು ಹಿಲ್ಸೈಡ್ ರೆಸಾರ್ಟ್',
        beachfront: 'ಕುಹು ಬೀಚ್ಫ್ರಂಟ್ ರೆಸಾರ್ಟ್',
        heritage: 'ಕುಹು ಹೆರಿಟೇಜ್ ಸೂಟ್'
      }
    }
  };

  const translations = t[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Parallax Effect */}
      <video
        className="absolute inset-0 w-full h-full object-cover transform scale-105"
        src={heroImage}
        autoPlay
        loop
        muted
        playsInline
      />

      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Elegant Hero Heading */}
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-white mb-8 animate-fade-in opacity-0 animation-delay-500">
          Kuhu Resorts
        </h1>
        <p className="font-script text-2xl md:text-3xl text-white/90 mb-12 animate-fade-in opacity-0 animation-delay-1000">
          ... since 2025
        </p>

        {/* Luxury Search Bar */}
        <div className="bg-white dark:bg-card backdrop-blur-sm rounded-2xl p-6 shadow-strong max-w-4xl mx-auto animate-scale-in opacity-0 animation-delay-1500">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            
            {/* Resort/Villa Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <MapPin size={16} />
                {translations.resort}
              </label>
              <Select value={resort} onValueChange={setResort}>
                <SelectTrigger className="h-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-input text-gray-900 dark:text-foreground">
                  <SelectValue placeholder={translations.selectResort} />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-popover border border-gray-200 dark:border-gray-700">
                  <SelectItem value="kuhu-backwaters">{translations.resorts.backwaters}</SelectItem>
                  <SelectItem value="kuhu-hillside">{translations.resorts.hillside}</SelectItem>
                  <SelectItem value="kuhu-beachfront">{translations.resorts.beachfront}</SelectItem>
                  <SelectItem value="kuhu-heritage">{translations.resorts.heritage}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Check-in Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Calendar size={16} />
                {translations.checkIn}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-12 justify-start text-left font-normal border border-gray-200 dark:border-gray-700 bg-white dark:bg-input text-gray-900 dark:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {checkIn ? format(checkIn, "MMM dd") : translations.selectDate}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white dark:bg-popover border border-gray-200 dark:border-gray-700" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Calendar size={16} />
                {translations.checkOut}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-12 justify-start text-left font-normal border border-gray-200 dark:border-gray-700 bg-white dark:bg-input text-gray-900 dark:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {checkOut ? format(checkOut, "MMM dd") : translations.selectDate}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white dark:bg-popover border border-gray-200 dark:border-gray-700" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Users size={16} />
                {translations.guests}
              </label>
              <div className="flex gap-2">
                <Select value={adults} onValueChange={setAdults}>
                  <SelectTrigger className="h-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-input text-gray-900 dark:text-foreground">
                    <SelectValue placeholder={translations.adults_plural} />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-popover border border-gray-200 dark:border-gray-700">
                    {[1,2,3,4,5,6].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num > 1 ? translations.adults_plural : translations.adults}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={children} onValueChange={setChildren}>
                  <SelectTrigger className="h-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-input text-gray-900 dark:text-foreground">
                    <SelectValue placeholder={translations.children_plural} />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-popover border border-gray-200 dark:border-gray-700">
                    {[0,1,2,3,4].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num !== 1 ? translations.children_plural : translations.children}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-6">
            <Button 
              onClick={handleSearch}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 h-12 rounded-full transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              <Search size={20} className="mr-2" />
              {translations.search}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-secondary transition-smooth animate-float"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-inter mb-2 opacity-80">{translations.discover}</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
