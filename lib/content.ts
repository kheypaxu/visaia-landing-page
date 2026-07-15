export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#why-visaia" },
  { label: "Platform", href: "#precision-modules" },
  { label: "Contact", href: "#contact" },
];

export const whyVisaia = [
  {
    title: "Early Detection",
    description: "Identify farmers with pest infestation before they spread.",
    image: "/images/farmer.png",
    variant: "image" as const,
  },
  {
    title: "Smart Monitoring",
    description: "Track pest reports and monitor affected areas in real time.",
    variant: "dark" as const,
  },
  {
    title: "GIS Risk Mapping",
    description: "Visualize pest risk zones with real-time GIS simulation and deployment.",
    image: "/images/gis-risk-map.png",
    variant: "image" as const,
  },
  {
    title: "Instant Alerts",
    description: "Notify farmers immediately about nearby pest threats and recommended actions.",
    variant: "dark" as const,
  },
];

export const precisionFeatures = [
  {
    title: "Real-Time Alerts",
    description: "SMS and push notifications for rapid field response.",
  },
  {
    title: "Expert Validation",
    description: "Remote verification by entomologists and RCPC experts.",
  },
  {
    title: "Smart Suggestions",
    description: "AI-driven pest control strategies tailored to your field.",
  },
  {
    title: "Real-Time Monitoring",
    description: "Monitor crops every day to prevent vulnerability and outbreaks.",
  },
];

export const workflowSteps = [
  {
    number: "1",
    title: "Capture",
    description: "Farmers capture pest images using the VISAIA mobile application.",
  },
  {
    number: "2",
    title: "Detect",
    description: "Artificial intelligence identifies the pest species and its stage.",
  },
  {
    number: "3",
    title: "Validate",
    description: "Agricultural experts review and validate AI-generated reports.",
  },
  {
    number: "4",
    title: "Monitor",
    description: "Validated reports are displayed on the Risk Map and Analytics Dashboard.",
  },
  {
    number: "5",
    title: "Respond",
    description: "Farmers receive alerts and science-based management recommendations.",
  },
];

export const beneficiaries = [
  {
    title: "Farmers",
    description: "Receive early warnings and personalized pest management recommendations.",
  },
  {
    title: "RCPC",
    description: "Validate reports, monitor outbreaks, and coordinate response efforts.",
  },
  {
    title: "LGUs",
    description: "Support local pest surveillance and agricultural extension services.",
  },
  {
    title: "Researchers",
    description: "Access pest monitoring data to support agricultural studies.",
  },
];

export const startFeatures = [
  "AI-assisted pest identification",
  "Real-time monitoring",
  "Interactive GIS mapping",
  "Data-driven analytics",
  "Faster response to pest outbreaks",
  "Supports sustainable agriculture",
];

export const faqItems = [
  {
    question: "What is VISAIA?",
    answer:
      "VISAIA is an AI-powered pest management system designed to detect and monitor Fall Armyworm infestations in corn fields using image recognition and GIS mapping.",
  },
  {
    question: "Who can use the VISAIA mobile application?",
    answer:
      "The app is available for corn farmers, agricultural extension workers, and representatives from the RCPC and LGUs involved in pest surveillance.",
  },
  {
    question: "How accurate is the AI pest identification?",
    answer:
      "Our AI model is trained on thousands of verified field images and currently achieves over 95% accuracy in identifying Fall Armyworm life stages.",
  },
  {
    question: "Does the system provide pest management advice?",
    answer:
      "Yes, once a report is validated, the system sends science-based management recommendations directly to the farmer through the mobile app.",
  },
];

export const teamMembers = [
  "Nicole Khey Bangayos",
  "Joel I. Cabatino Jr.",
  "Cherry Jean V. Dagohoy",
  "Phil Angelo Gaen",
];