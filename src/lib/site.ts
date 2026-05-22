export const SITE = {
  name: "Loves Landscapes & Garden Services",
  short: "Loves Landscapes",
  tagline: "Where your garden gets the Love it deserves!",
  phone: "+44 7592 532672",
  phoneHref: "tel:+447592532672",
  whatsapp: "447592532672",
  whatsappHref:
    "https://wa.me/447592532672?text=Hi%20Loves%20Landscapes%2C%20I%27d%20like%20a%20free%20quote.",
  email: "grantlove.landscapes@outlook.com",
  emailHref: "mailto:grantlove.landscapes@outlook.com",
  facebook: "https://www.facebook.com/profile.php?id=61589711874094",
  facebookReviews:
    "https://www.facebook.com/profile.php?id=61589711874094&sk=reviews",
  instagram: "https://www.instagram.com/loveslandscapes.gardenservices/",
  area: "Northamptonshire, United Kingdom",
  city: "Northampton",
  region: "Northamptonshire",
  country: "United Kingdom",
  yearsExperience: 12,
  formspree: "https://formspree.io/f/REPLACE_WITH_YOUR_ID",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/landscaping", label: "Landscaping" },
  { to: "/garden-maintenance", label: "Garden Maintenance" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export const PROJECTS = [
  { id: 1, before: "/projects/p1-before.jpg", after: "/projects/p1-after.jpg", caption: "Busy day today — tidy ups, first grass cuts and new customers" },
  { id: 2, before: "/projects/p2-before.jpg", after: "/projects/p2-after.jpg", caption: "Overgrown lawn restored to a crisp, clean finish" },
  { id: 3, before: "/projects/p3-before.jpg", after: "/projects/p3-after.jpg", caption: "Full garden tidy and seasonal refresh" },
  { id: 4, before: "/projects/p4-before.jpg", after: "/projects/p4-after.jpg", caption: "Borders edged, lawn cut, hedges trimmed" },
  { id: 5, before: "/projects/p5-before.jpg", after: "/projects/p5-after.jpg", caption: "Garden transformation with precision detailing" },
  { id: 6, before: "/projects/p6-before.jpg", after: "/projects/p6-after.jpg", caption: "Reclaiming a neglected lawn — back to its best" },
  { id: 7, before: "/projects/p7-before.jpg", after: "/projects/p7-after.jpg", caption: "Fresh stripes, trimmed edges, total turnaround" },
  { id: 8, before: "/projects/p8-before.jpg", after: "/projects/p8-after.jpg", caption: "Hedge cut and lawn restored to perfection" },
  { id: 9, before: "/projects/p9-before.jpg", after: "/projects/p9-after.jpg", caption: "Premium domestic maintenance round" },
];

export const SERVICES = [
  { slug: "landscaping", title: "Landscaping", icon: "🌿", description: "Garden transformations, design and full landscape installation." },
  { slug: "garden-maintenance", title: "Garden Maintenance", icon: "🪴", description: "Regular tidy ups, seasonal care and ongoing garden upkeep." },
  { slug: "lawn-care", title: "Lawn Care", icon: "🌱", description: "Professional mowing, striping, feeding and lawn restoration." },
  { slug: "hedge-cutting", title: "Hedge Cutting", icon: "✂️", description: "Precise hedge trimming and shaping for clean defined lines." },
  { slug: "grounds-maintenance", title: "Grounds Maintenance", icon: "🏡", description: "Reliable upkeep for larger gardens, properties and grounds." },
  { slug: "strimming", title: "Strimming", icon: "💨", description: "Edges, awkward areas and overgrowth tamed in one visit." },
  { slug: "weeding", title: "Weeding", icon: "🌾", description: "Borders, paths and patios cleared and kept weed free." },
  { slug: "border-edging", title: "Border Edging", icon: "📏", description: "Crisp, defined borders that lift the look of any garden." },
  { slug: "garden-clearances", title: "Garden Clearances", icon: "🍂", description: "Overgrown gardens fully cleared, ready for a fresh start." },
  { slug: "garden-transformations", title: "Garden Transformations", icon: "✨", description: "Tired outdoor space? We make it beautiful again." },
];
