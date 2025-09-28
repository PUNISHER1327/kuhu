import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Kumarakom, Kottayam District", "Kerala 686563, India"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 481 252 4900", "+91 481 252 4901"],
      link: "tel:+914812524900"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@kuhu.com", "info@kuhu.com"],
      link: "mailto:reservations@kuhu.com"
    },
    {
      icon: Clock,
      title: "Reception",
      details: ["24/7 Available", "Concierge Services"],
      link: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        checkIn: '',
        checkOut: '',
        guests: '2'
      });
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="text-secondary font-inter font-semibold tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="subheading-luxury mt-4 mb-6">
            Contact Us
          </h2>
          <p className="body-luxury text-lg max-w-3xl mx-auto">
            Ready to experience the magic of Kuhu? Our dedicated team is here to help you plan your perfect 
            getaway to Kerala's backwaters. Reach out to us and let's create unforgettable memories together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-playfair font-semibold text-2xl mb-8 text-foreground">
              Visit Kuhu Resort
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent size={20} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <div key={idx}>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="body-luxury hover:text-primary transition-smooth block"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p className="body-luxury">{detail}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="luxury-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin size={24} className="text-secondary-foreground" />
              </div>
              <h4 className="font-playfair font-semibold text-lg mb-2 text-foreground">
                Find Us on the Map
              </h4>
              <p className="body-luxury mb-4">
                Located on the pristine backwaters of Kumarakom, easily accessible from Cochin International Airport.
              </p>
              <Button 
                className="btn-secondary"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                View on Google Maps
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0">
            <div className="luxury-card p-8">
              <h3 className="font-playfair font-semibold text-2xl mb-6 text-foreground">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={64} className="text-secondary mx-auto mb-4" />
                  <h4 className="font-playfair font-semibold text-xl mb-2 text-foreground">
                    Thank You!
                  </h4>
                  <p className="body-luxury">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-inter font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="transition-smooth focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-inter font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="transition-smooth focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-inter font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-sm font-inter font-medium text-foreground">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background text-foreground transition-smooth focus:border-primary focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num.toString()}>
                            {num} Guest{num > 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Travel Dates */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="checkIn" className="text-sm font-inter font-medium text-foreground">
                        Check-in Date
                      </label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="checkOut" className="text-sm font-inter font-medium text-foreground">
                        Check-out Date
                      </label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className="transition-smooth focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-inter font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      className="transition-smooth focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-inter font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your perfect getaway..."
                      rows={5}
                      className="transition-smooth focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-hero flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;