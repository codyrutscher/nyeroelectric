export const siteConfig = {
  name: "Nyero Electric",
  description: "Professional Electrical Services - Licensed & Insured",
  url: "https://nyeroelectric.com",

  // Contact Information
  contact: {
    phone: "(555) 123-4567",
    email: "info@nyeroelectric.com",
    address: "123 Electric Ave, City, State 12345",
    hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-4PM",
  },

  // Social Media
  social: {
    facebook: "https://facebook.com/nyeroelectric",
    instagram: "https://instagram.com/nyeroelectric",
    tiktok: "https://tiktok.com/@nyeroelectric",
    linkedin: "https://linkedin.com/company/nyeroelectric",
  },

  // WhatsApp for chatbot
  whatsapp: {
    number: "5551234567", // Phone number in international format without + or spaces
    defaultMessage: "Hi! I'd like to learn more about your electrical services.",
  },

  // Google Business Profile
  googleBusinessProfile: {
    placeId: "YOUR_PLACE_ID_HERE", // Get from Google My Business
    reviewsApiKey: "YOUR_API_KEY_HERE", // Google Places API key
  },

  // Booking Integration
  booking: {
    // Calendly, Acuity, or custom booking system
    provider: "calendly", // "calendly" | "acuity" | "custom"
    url: "https://calendly.com/nyeroelectric", // Your booking URL
  },

  // Services
  services: [
    {
      id: "residential",
      name: "Residential Electrical",
      slug: "residential-electrical",
      description: "Complete electrical solutions for your home",
      icon: "home",
      features: [
        "Electrical Panel Upgrades",
        "Outlet & Switch Installation",
        "Lighting Installation",
        "Home Rewiring",
        "Safety Inspections",
        "Smart Home Integration",
      ],
    },
    {
      id: "commercial",
      name: "Commercial Electrical",
      slug: "commercial-electrical",
      description: "Professional electrical services for businesses",
      icon: "building",
      features: [
        "Commercial Wiring",
        "Lighting Design & Installation",
        "Power Distribution",
        "Emergency Lighting",
        "Code Compliance",
        "Preventive Maintenance",
      ],
    },
    {
      id: "emergency",
      name: "Emergency Services",
      slug: "emergency-services",
      description: "24/7 emergency electrical repair services",
      icon: "emergency",
      features: [
        "24/7 Availability",
        "Rapid Response",
        "Power Outage Solutions",
        "Emergency Repairs",
        "Safety Hazard Correction",
        "Storm Damage Repair",
      ],
    },
    {
      id: "ev-charging",
      name: "EV Charging Stations",
      slug: "ev-charging-stations",
      description: "Electric vehicle charging station installation",
      icon: "ev",
      features: [
        "Level 2 Charger Installation",
        "Tesla Wall Connector",
        "Commercial EV Charging",
        "Electrical Panel Upgrades",
        "Permit & Inspection",
        "Smart Charging Solutions",
      ],
    },
    {
      id: "generator",
      name: "Generator Installation",
      slug: "generator-installation",
      description: "Backup power solutions for your property",
      icon: "generator",
      features: [
        "Whole Home Generators",
        "Portable Generator Hookups",
        "Transfer Switch Installation",
        "Maintenance Services",
        "Load Calculation",
        "Automatic Backup Systems",
      ],
    },
  ],

  // Brand Colors (can be customized)
  colors: {
    primary: "#FF6B00", // Electric Orange
    secondary: "#1E3A8A", // Deep Blue
    accent: "#FCD34D", // Yellow
    dark: "#1F2937",
    light: "#F9FAFB",
  },

  // Features Toggle
  features: {
    chatbot: true,
    whatsappChatbot: false, // Toggle between regular chatbot and WhatsApp
    floatingWidget: true,
    socialFeed: true,
    reviews: true,
    gbpPosts: true,
    booking: true,
    animations: true,
  },
};

export type SiteConfig = typeof siteConfig;
