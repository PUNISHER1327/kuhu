import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Send,
  CheckCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
    
    // Reset success state after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Rooms & Suites', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'Spa & Wellness', href: '#spa' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Airport Transfer', href: '#' },
    { label: 'Concierge Services', href: '#' },
    { label: 'Event Planning', href: '#' },
    { label: 'Cultural Tours', href: '#' },
    { label: 'Backwater Cruises', href: '#' },
    { label: 'Ayurvedic Treatments', href: '#' }
  ];

  const policies = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Cancellation Policy', href: '#' },
    { label: 'Accessibility', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-playfair font-semibold text-3xl mb-4">
              Stay Connected with Kuhu
            </h3>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter for exclusive offers, seasonal packages, and insider tips 
              on experiencing the best of Kerala's backwaters.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center space-x-3 py-4">
                <CheckCircle size={24} className="text-green-600" />
                <span className="text-lg font-medium">
                  Thank you for subscribing! Check your inbox for a welcome gift.
                </span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background border-background text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary-hover px-6"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-playfair font-bold mb-2">Kuhu</h2>
                <span className="text-sm tracking-wider opacity-80">KERALA RESORT</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Experience the epitome of luxury in God's Own Country. Kuhu Resort offers 
                unparalleled hospitality amidst the serene backwaters of Kerala.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="flex-shrink-0 opacity-80" />
                  <span className="text-sm opacity-90">
                    Kumarakom, Kottayam District, Kerala 686563
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="flex-shrink-0 opacity-80" />
                  <span className="text-sm opacity-90">+91 481 252 4900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="flex-shrink-0 opacity-80" />
                  <span className="text-sm opacity-90">reservations@kuhu.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-playfair font-semibold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-playfair font-semibold text-xl mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies & Social */}
            <div>
              <h3 className="font-playfair font-semibold text-xl mb-6">Legal & Social</h3>
              <ul className="space-y-3 mb-8">
                {policies.map((policy) => (
                  <li key={policy.label}>
                    <button
                      onClick={() => scrollToSection(policy.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                    >
                      {policy.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="font-inter font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <button
                        key={social.label}
                        onClick={() => scrollToSection(social.href)}
                        className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-smooth"
                        aria-label={social.label}
                      >
                        <IconComponent size={18} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © 2024 Kuhu Resort. All rights reserved. | Crafted with love in Kerala.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-xs text-primary-foreground/60">
                A luxury resort by Kerala Tourism
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                <span className="text-xs text-primary-foreground/60">Live Availability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;