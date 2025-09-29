import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { 
      label: language === 'kn' ? 'ನಮ್ಮ ರೆಸಾರ್ಟ್' : 'Our Resort', 
      href: '#about' 
    },
    { 
      label: language === 'kn' ? 'ಕೊಠಡಿಗಳು ಮತ್ತು ಸೂಟ್‌ಗಳು' : 'Rooms & Suites', 
      href: '#rooms' 
    },
    { 
      label: language === 'kn' ? 'ಊಟ' : 'Dining', 
      href: '#dining' 
    },
    { 
      label: language === 'kn' ? 'ಸ್ಪಾ ಮತ್ತು ಕಲ್ಯಾಣ' : 'Spa & Wellness', 
      href: '#spa' 
    },
    { 
      label: language === 'kn' ? 'ಗ್ಯಾಲರಿ' : 'Gallery', 
      href: '#gallery' 
    },
    { 
      label: language === 'kn' ? 'ಸಂಪರ್ಕ' : 'Contact', 
      href: '#contact' 
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border' 
            : 'bg-black/20 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className={`text-3xl font-playfair font-bold transition-colors ${
                isScrolled ? 'text-primary' : 'text-white drop-shadow-lg'
              }`}>
                Kuhu
              </h1>
              <span className={`ml-2 text-sm font-inter tracking-wider transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80 drop-shadow-lg'
              }`}>
                {language === 'kn' ? 'ಕೇರಳ ರೆಸಾರ್ಟ್' : 'KERALA RESORT'}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-inter font-medium transition-all duration-300 relative ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white drop-shadow-lg hover:text-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language Selector */}
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className={`w-16 h-8 border-0 ${
                  isScrolled ? 'bg-background' : 'bg-white/20 text-white'
                }`}>
                  <Globe size={16} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
                </SelectContent>
              </Select>

              {/* Dark Mode Toggle */}
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="icon"
                className={`h-8 w-8 ${
                  isScrolled ? '' : 'text-white hover:bg-white/20'
                }`}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </Button>

              <Button className="btn-hero ml-4">
                {language === 'kn' ? 'ಈಗ ಬುಕ್ ಮಾಡಿ' : 'Book Now'}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white drop-shadow-lg hover:text-secondary'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
        <div className="relative h-full flex flex-col justify-center items-center space-y-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-2xl font-playfair font-medium text-foreground hover:text-primary transition-smooth"
            >
              {item.label}
            </button>
          ))}
          
          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 mt-8">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-20">
                <Globe size={16} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="icon"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          <Button className="btn-hero">
            {language === 'kn' ? 'ಈಗ ಬುಕ್ ಮಾಡಿ' : 'Book Now'}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navigation;