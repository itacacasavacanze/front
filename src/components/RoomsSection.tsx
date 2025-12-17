import React, { useState } from 'react';
import { Wifi, Car, Coffee, AirVent, Waves, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { GalleryPreview } from './GalleryPreview';
import { ImageGallery } from './ImageGallery';
import roomImage from '../assets/room-deluxe.jpg';
import { PIANO_TERRA_IMAGES, PRIMO_PIANO_IMAGES } from '../constants/images';

const mainGroundFloor = 'https://imgur.com/opiXPmr.jpg';
const mainFirstFloor = 'https://imgur.com/OOpjz8O.jpg';

export const RoomsSection: React.FC = () => {
  const { t } = useLanguage();
  // State to track which images to show in the gallery (null means closed)
  const [activeGalleryImages, setActiveGalleryImages] = useState<string[] | null>(null);

  const apartments = [
    {
      name: t('groundFloorApartment'),
      price: '',
      image: mainGroundFloor,
      images: PIANO_TERRA_IMAGES, // Specific images for this apartment
      amenities: [Wifi, Coffee, AirVent, Car, Zap],
      features: [t('sqm75'), t('gardenView'), t('twoBedrooms'), t('livingArea'), t('fourPeople'), t('terrace'), t('balcony'), t('kitchen')],
      description: t('seaViewDescription')
    },
    {
      name: t('firstFloorApartment'),
      price: '',
      image: mainFirstFloor,
      images: PRIMO_PIANO_IMAGES, // Specific images for this apartment
      amenities: [Wifi, Coffee, AirVent, Car, Zap],
      features: [t('sqm75'), t('gardenView'), t('twoBedrooms'), t('livingArea'), t('fourPeople'), t('terrace'), t('balcony'), t('kitchen')],
      description: t('familyDescription')
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {t('roomsTitle')}
          </h2>
          <div className="w-20 h-1 bg-gradient-sea rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('roomsSubtitle')}
          </p>
        </div>

        {/* Apartments Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {apartments.map((apartment, index) => (
            <div key={index} className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500">
              {/* Apartment Image */}
              <div className="relative overflow-hidden">
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Apartment Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {apartment.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {apartment.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {apartment.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex space-x-3">
                  {apartment.amenities.map((Amenity, idx) => (
                    <div key={idx} className="w-8 h-8 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Amenity className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  ))}
                </div>

                {/* Gallery Preview */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">{t('photoGallery')}</h4>
                  <GalleryPreview
                    images={apartment.images}
                    onOpenGallery={() => setActiveGalleryImages(apartment.images)}
                  />
                </div>

                {/* Book Button */}
                <Button
                  variant="elegant"
                  className="w-full group-hover:shadow-soft"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('bookNow')}  {apartment.price}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery Modal */}
        <ImageGallery
          isOpen={!!activeGalleryImages}
          onClose={() => setActiveGalleryImages(null)}
          images={activeGalleryImages || []}
        />

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-cream border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              {t('allRoomsInclude')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center space-x-2">
                <Wifi className="h-4 w-4" />
                <span>{t('freeWifi')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <AirVent className="h-4 w-4" />
                <span>{t('airConditioning')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Coffee className="h-4 w-4" />
                <span>{t('welcomeAmenities')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Car className="h-4 w-4" />
                <span>{t('freeParking')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>{t('EVcharge')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
