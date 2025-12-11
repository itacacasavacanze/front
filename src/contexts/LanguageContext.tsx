import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'it' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    rooms: 'Rooms & Rates',
    availability: 'Availability',
    contact: 'Contact',
    about: 'About',

    // Hero Section
    heroTitle: 'Welcome to Itaca Casa Vacanze',
    heroSubtitle: 'Experience Mediterranean luxury in the neighbourhood of Marina di Ragusa, Sicily',
    heroDescription: 'Discover our elegant apartments',
    bookNow: 'Book Now',
    exploreRooms: 'Explore Apartments',
    guestRating: 'Guest Rating',

    // About Section
    aboutTitle: 'Our Story',
    aboutText: 'Apartamento Itaca is a boutique gem nestled in the enchanting Marina di Ragusa, Sicily. Our place combines traditional Sicilian hospitality with contemporary elegance, offering guests an unforgettable Mediterranean experience.',
    luxuryExperience: 'Top Rating Experience',
    luxuryDescription: 'Personal touch loved by our customers',
    primeLocation: 'Prime Location',
    locationDescription: 'Steps away from pristine Mediterranean beaches',
    authenticHospitality: 'Authentic Hospitality',
    hospitalityDescription: 'Traditional Sicilian warmth and modern comfort',
    memorableMoments: 'Memorable Moments',
    momentsDescription: 'Creating unforgettable memories',

    // Rooms
    roomsTitle: 'Our Apartments',
    roomsSubtitle: 'Choose from our two beautiful apartments, each offering comfort and authentic Sicilian hospitality',
    deluxeRoom: 'Deluxe Room',
    seaView: 'Sea View Suite',
    familySuite: 'Family Suite',
    fromPrice: ' ',
    seaViewDescription: 'Spacious apartment with stunning sea views and modern amenities',
    familyDescription: 'Family-friendly apartment perfect for longer stays',
    allRoomsInclude: 'All Rooms Include',
    freeWifi: 'Free WiFi',
    airConditioning: 'Air Conditioning',
    welcomeAmenities: 'Welcome Amenities',
    freeParking: 'Free Parking',
    photoGallery: 'Photo Gallery',
    EVcharge: 'Free charging stations for EVs',
    callOrWhatsapp: 'Call us or WhatsApp us',

    // Availability
    availabilitySubtitle: 'Check our real-time availability and book your perfect dates',
    available: 'Available',
    booked: 'Booked',
    pastDate: 'Past Date',
    readyToBook: 'Ready to Book?',
    readyToBookText: 'Contact us directly to secure your preferred dates and receive personalized assistance',

    // Contact
    contactTitle: 'Book your stay',
    contactSubtitle: 'Fill out the form below and we\'ll get back to you soon',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    checkInDate: 'Check-in Date',
    checkOutDate: 'Check-out Date',
    specialRequests: 'Special Requests',
    address: 'Via dell\'Arancio 20. Corso Oceano Atlantico 28, Marina di Ragusa, Sicilia (2 Independent Entrances)',
    phone: '+39 3397056128    +34 644925499',
    email: 'info@itacasavacanze.com',

    // Footer
    followUs: 'Follow us on',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    adults: 'Persons',
    apartmentPreference: 'Apartment Preference',
    groundFloor: 'Ground Floor',
    firstFloor: 'First Floor',
    any: 'Any',
    established: 'Established',
    renovated: 'Renovated',
    sqm75: '75 sqm',
    gardenView: 'Garden View',
    twoBedrooms: '2 Bedrooms',
    livingArea: 'Living Area',
    terrace: 'Terrace',
    balcony: 'Balcony',
    kitchen: 'Kitchen',
  },
  it: {
    // Navigation
    home: 'Home',
    rooms: 'Camere e Tariffe',
    availability: 'Disponibilità',
    contact: 'Contatti',
    about: 'Chi Siamo',

    // Hero Section
    heroTitle: 'Benvenuti a Itaca Casa Vacanze',
    heroSubtitle: 'Vivete il lusso mediterraneo nelle vicinanze di Marina di Ragusa, Sicilia',
    heroDescription: 'Scoprite i nostri eleganti appartamenti',
    bookNow: 'Prenota Ora',
    exploreRooms: 'Esplora Appartamenti',
    guestRating: 'Valutazione Ospiti',

    // About Section
    aboutTitle: 'La Nostra Storia',
    aboutText: 'Apartamento Itaca è una gemma boutique immersa nell\'incantevole Marina di Ragusa, Sicilia. Il nostro posto combina l\'hospitalità tradizionale siciliana con l\'eleganza contemporanea.',
    luxuryExperience: 'Esperienza di prima categoria',
    luxuryDescription: 'Tocco personale amato dai nostri clienti',
    primeLocation: 'Posizione Privilegiata',
    locationDescription: 'A pochi passi dalle spiagge mediterranee incontaminate',
    authenticHospitality: 'Ospitalità Autentica',
    hospitalityDescription: 'Calore siciliano tradizionale e comfort moderno',
    memorableMoments: 'Momenti Memorabili',
    momentsDescription: 'Creando ricordi indimenticabili',

    // Rooms
    roomsTitle: 'I Nostri Appartamenti',
    roomsSubtitle: 'Scegli tra i nostri due bellissimi appartamenti, ognuno offre comfort e autentica ospitalità siciliana',
    deluxeRoom: 'Camera Deluxe',
    seaView: 'Suite Vista Mare',
    familySuite: 'Suite Famiglia',
    fromPrice: 'Da €120/notte',
    seaViewDescription: 'Appartamento spazioso con vista mare mozzafiato e servizi moderni',
    familyDescription: 'Appartamento adatto alle famiglie, perfetto per soggiorni più lunghi',
    allRoomsInclude: 'Tutte le Camere Includono',
    freeWifi: 'WiFi Gratuito',
    airConditioning: 'Aria Condizionata',
    welcomeAmenities: 'Servizi di Benvenuto',
    freeParking: 'Parcheggio Gratuito',
    photoGallery: 'Galleria Fotografica',
    EVcharge: 'Stazioni di carica gratuita',
    callOrWhatsapp: 'Chiamaci o scrivici su WhatsApp',

    // Availability
    availabilitySubtitle: 'Controlla la nostra disponibilità in tempo reale e prenota le tue date perfette',
    available: 'Disponibile',
    booked: 'Prenotato',
    pastDate: 'Data Passata',
    readyToBook: 'Pronto a Prenotare?',
    readyToBookText: 'Contattaci direttamente per assicurarti le date preferite e ricevere assistenza personalizzata',

    // Contact
    contactTitle: 'Prenota il tuo soggiorno',
    contactSubtitle: 'Compila il modulo qui sotto e ti ricontatteremo presto',
    fullName: 'Nome Completo',
    emailAddress: 'Indirizzo Email',
    checkInDate: 'Data di Check-in',
    checkOutDate: 'Data di Check-out',
    specialRequests: 'Richieste Speciali',
    address: 'Via dell\'Arancio 20. Corso Oceano Atlantico 28, Marina di Ragusa, Sicilia (2 Ingressi Indipendenti)',
    phone: '+39 3397056128    +34 644925499',
    email: 'info@itacasavacanze.com',

    // Footer
    followUs: 'Seguici su',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Termini e Condizioni',
    adults: 'Persone',
    apartmentPreference: 'Preferenza Appartamento',
    groundFloor: 'Piano Terra',
    firstFloor: 'Primo Piano',
    any: 'Qualsiasi',
    established: 'Fondata',
    renovated: 'Ristrutturata',
    sqm75: '75 mq',
    gardenView: 'Vista Giardino',
    twoBedrooms: '2 Camere da Letto',
    livingArea: 'Zona Giorno',
    terrace: 'Terrazza',
    balcony: 'Balcone',
    kitchen: 'Cucina',
  },
  es: {
    // Navigation
    home: 'Inicio',
    rooms: 'Habitaciones y Tarifas',
    availability: 'Disponibilidad',
    contact: 'Contacto',
    about: 'Nosotros',

    // Hero Section
    heroTitle: 'Bienvenidos a Itaca Casa Vacanze',
    heroSubtitle: 'Experimenta el lujo mediterráneo en la vecindad de Marina di Ragusa, Sicilia',
    heroDescription: 'Descubre nuestros elegantes apartamentos',
    bookNow: 'Reservar Ahora',
    exploreRooms: 'Explorar Apartamentos',
    guestRating: 'Calificación de Huéspedes',

    // About Section
    aboutTitle: 'Nuestra Historia',
    aboutText: 'Apartamento Itaca es una joya boutique situada en la encantadora Marina di Ragusa, Sicilia. Nuestro lugar combina la hospitalidad tradicional siciliana con la elegancia contemporánea.',
    luxuryExperience: 'Experiencia de Lujo',
    luxuryDescription: 'Toque personalizado amado por nuestros clientes',
    primeLocation: 'Ubicación Privilegiada',
    locationDescription: 'A pasos de las playas mediterráneas pristinas',
    authenticHospitality: 'Hospitalidad Auténtica',
    hospitalityDescription: 'Calidez siciliana tradicional y comodidad moderna',
    memorableMoments: 'Momentos Memorables',
    momentsDescription: 'Creando recuerdos inolvidables',

    // Rooms
    roomsTitle: 'Nuestros Apartamentos',
    roomsSubtitle: 'Elige entre nuestros dos hermosos apartamentos, cada uno ofrece comodidad y auténtica hospitalidad siciliana',
    deluxeRoom: 'Habitación Deluxe',
    seaView: 'Suite Vista al Mar',
    familySuite: 'Suite Familiar',
    fromPrice: 'Desde €120/noche',
    seaViewDescription: 'Apartamento espacioso con vistas al mar impresionantes y servicios modernos',
    familyDescription: 'Apartamento familiar perfecto para estancias más largas',
    allRoomsInclude: 'Todas las Habitaciones Incluyen',
    freeWifi: 'WiFi Gratuito',
    airConditioning: 'Aire Acondicionado',
    welcomeAmenities: 'Servicios de Bienvenida',
    freeParking: 'Estacionamiento Gratuito',
    photoGallery: 'Galería de Fotos',
    EVcharge: 'Estación de carga gratuita',
    callOrWhatsapp: 'Llámanos o escríbenos por WhatsApp',

    // Availability
    availabilitySubtitle: 'Consulta nuestra disponibilidad en tiempo real y reserva tus fechas perfectas',
    available: 'Disponible',
    booked: 'Reservado',
    pastDate: 'Fecha Pasada',
    readyToBook: '¿Listo para Reservar?',
    readyToBookText: 'Contáctanos directamente para asegurar tus fechas preferidas y recibir asistencia personalizada',

    // Contact
    contactTitle: 'Reserva tu estancia',
    contactSubtitle: 'Completa el formulario a continuación y te contactaremos pronto',
    fullName: 'Nombre Completo',
    emailAddress: 'Dirección de Email',
    checkInDate: 'Fecha de Check-in',
    checkOutDate: 'Fecha de Check-out',
    specialRequests: 'Solicitudes Especiales',
    address: 'Via dell\'Arancio 20. Corso Oceano Atlantico 28, Marina di Ragusa, Sicilia (2 Entradas Independientes)',
    phone: '+39 3397056128    +34 644925499',
    email: 'info@itacasavacanze.com',

    // Footer
    followUs: 'Síguenos en',
    privacyPolicy: 'Política de Privacidad',
    termsConditions: 'Términos y Condiciones',
    adults: 'Personas',
    apartmentPreference: 'Preferencia de Apartamento',
    groundFloor: 'Planta Baja',
    firstFloor: 'Primer Piso',
    any: 'Cualquiera',
    established: 'Fundada',
    renovated: 'Renovada',
    sqm75: '75 m²',
    gardenView: 'Vista al Jardín',
    twoBedrooms: '2 Dormitorios',
    livingArea: 'Sala de Estar',
    terrace: 'Terraza',
    balcony: 'Balcón',
    kitchen: 'Cocina',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};