import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import luxurySuiteImage from '@/assets/luxury-suite.jpg';
import spaImage from '@/assets/spa-treatment.jpg';
import diningImage from '@/assets/fine-dining.jpg';

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-scale-in');
              }, index * 100);
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

  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      alt: "Kuhu Resort Backwater View",
      category: "Resort Views",
      title: "Serene Backwaters"
    },
    {
      id: 2,
      src: luxurySuiteImage,
      alt: "Luxury Suite Interior",
      category: "Accommodations",
      title: "Premium Suite"
    },
    {
      id: 3,
      src: spaImage,
      alt: "Spa Treatment Room",
      category: "Wellness",
      title: "Ayurvedic Spa"
    },
    {
      id: 4,
      src: diningImage,
      alt: "Fine Dining Restaurant",
      category: "Dining",
      title: "Spice Route Restaurant"
    },
    {
      id: 5,
      src: heroImage,
      alt: "Resort Garden",
      category: "Resort Views", 
      title: "Tropical Gardens"
    },
    {
      id: 6,
      src: luxurySuiteImage,
      alt: "Villa Terrace",
      category: "Accommodations",
      title: "Private Villa"
    },
    {
      id: 7,
      src: spaImage,
      alt: "Meditation Pavilion",
      category: "Wellness",
      title: "Wellness Sanctuary"
    },
    {
      id: 8,
      src: diningImage,
      alt: "Poolside Dining",
      category: "Dining",
      title: "Café Cascade"
    },
    {
      id: 9,
      src: heroImage,
      alt: "Sunset View",
      category: "Resort Views",
      title: "Golden Hour"
    }
  ];

  const categories = ["All", "Resort Views", "Accommodations", "Wellness", "Dining"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedImage, filteredImages]);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="text-secondary font-inter font-semibold tracking-wider uppercase text-sm">
            Visual Journey
          </span>
          <h2 className="subheading-luxury mt-4 mb-6">
            Gallery
          </h2>
          <p className="body-luxury text-lg max-w-3xl mx-auto">
            Explore the beauty and elegance of Kuhu through our curated collection of images, 
            showcasing the breathtaking landscapes, luxurious accommodations, and exceptional experiences that await.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll opacity-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-inter font-medium transition-smooth ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-medium'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="animate-on-scroll opacity-0 group cursor-pointer overflow-hidden rounded-xl shadow-medium hover:shadow-strong transition-smooth"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-smooth" />
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <ZoomIn size={16} className="text-foreground" />
                </div>
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-smooth">
                  <h3 className="font-playfair font-semibold text-lg mb-1">
                    {image.title}
                  </h3>
                  <span className="text-sm opacity-90">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isLightboxOpen && selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-background/20 rounded-full flex items-center justify-center text-white hover:bg-background/30 transition-smooth z-10"
            >
              <X size={20} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 rounded-full flex items-center justify-center text-white hover:bg-background/30 transition-smooth z-10"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 rounded-full flex items-center justify-center text-white hover:bg-background/30 transition-smooth z-10"
            >
              <ChevronRight size={20} />
            </button>

            {/* Main Image */}
            <div className="max-w-5xl max-h-[90vh] mx-auto px-6">
              {(() => {
                const currentImage = filteredImages.find(img => img.id === selectedImage);
                return currentImage ? (
                  <div className="text-center">
                    <img
                      src={currentImage.src}
                      alt={currentImage.alt}
                      className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-strong"
                    />
                    <div className="mt-4 text-white">
                      <h3 className="font-playfair font-semibold text-2xl mb-2">
                        {currentImage.title}
                      </h3>
                      <span className="text-secondary font-inter">
                        {currentImage.category}
                      </span>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-background/20 rounded-full px-4 py-2 text-white text-sm">
              {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll opacity-0">
          <div className="luxury-card p-8 inline-block">
            <h3 className="font-playfair font-semibold text-2xl mb-4 text-foreground">
              Experience it in Person
            </h3>
            <p className="body-luxury mb-6 max-w-md">
              Pictures can only capture so much. Come and experience the magic of Kuhu for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Book Your Stay
              </button>
              <button className="btn-secondary">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;