export const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "Founder, TechStart Solutions",
    image: "/testimonials/rajesh-sharma.jpg",
    avatar: "/testimonials/rajesh-sharma.jpg",
    rating: 5,
    comment:
      "Portivra made company registration incredibly smooth. Their team guided us through every step of the process. The dashboard makes it easy to track all filings. Highly recommended for all business compliance needs!",
    date: "2024-01-15",
    service: "Private Limited Company Registration",
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "CA, Priya & Associates",
    image: "/testimonials/priya-patel.jpg",
    avatar: "/testimonials/priya-patel.jpg",
    rating: 5,
    comment:
      "Excellent GST filing service. Very professional and timely. The team is knowledgeable and always available to answer questions. Great experience working with Portivra!",
    date: "2024-01-10",
    service: "GST Filing Services",
  },
  {
    id: 3,
    name: "Amit Kumar",
    position: "HR Manager, Global Tech Solutions",
    image: "/testimonials/amit-kumar.jpg",
    avatar: "/testimonials/amit-kumar.jpg",
    rating: 4,
    comment:
      "Very helpful with PF and ESI compliance. Their team is knowledgeable and responsive. They handled everything professionally and ensured all deadlines were met.",
    date: "2024-01-05",
    service: "PF & ESI Registration",
  },
  {
    id: 4,
    name: "Sneha Roy",
    position: "Entrepreneur, Sneha's Boutique",
    image: "/testimonials/sneha-roy.jpg",
    avatar: "/testimonials/sneha-roy.jpg",
    rating: 5,
    comment:
      "The consultation session was incredibly valuable. Got clear insights on tax planning and business structuring. Worth every penny! Highly recommend their consultation services.",
    date: "2024-01-02",
    service: "Business Consultation",
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "Small Business Owner, Vikram Enterprises",
    image: "/testimonials/vikram-singh.jpg",
    avatar: "/testimonials/vikram-singh.jpg",
    rating: 5,
    comment:
      "Portivra has been a game-changer for my business. From registration to tax filing, they handle everything efficiently. Their support team is always there when I need them.",
    date: "2023-12-28",
    service: "ITR Filing",
  },
  {
    id: 6,
    name: "Neha Gupta",
    position: "Founder, Neha's Creations",
    image: "/testimonials/neha-gupta.jpg",
    avatar: "/testimonials/neha-gupta.jpg",
    rating: 5,
    comment:
      "Outstanding service! They helped me with my GST registration and filing. The process was seamless and stress-free. Will definitely recommend to fellow entrepreneurs.",
    date: "2023-12-20",
    service: "GST Registration",
  },
  {
    id: 7,
    name: "Rahul Mehta",
    position: "Director, Mehta Associates",
    image: "/testimonials/rahul-mehta.jpg",
    avatar: "/testimonials/rahul-mehta.jpg",
    rating: 4,
    comment:
      "Professional and efficient team. They helped us with company registration and ongoing compliance. The pricing is transparent and reasonable. Good experience overall.",
    date: "2023-12-15",
    service: "Company Registration",
  },
  {
    id: 8,
    name: "Anjali Desai",
    position: "Startup Founder, Desai Innovations",
    image: "/testimonials/anjali-desai.jpg",
    avatar: "/testimonials/anjali-desai.jpg",
    rating: 5,
    comment:
      "Portivra's team is exceptional! They guided me through the entire process of setting up my startup. Their expertise in taxation and compliance is unmatched. Highly recommended!",
    date: "2023-12-10",
    service: "Startup Consultation",
  },
  {
    id: 9,
    name: "Sanjay Kapoor",
    position: "Business Owner, Kapoor Traders",
    image: "/testimonials/sanjay-kapoor.jpg",
    avatar: "/testimonials/sanjay-kapoor.jpg",
    rating: 5,
    comment:
      "Very reliable and trustworthy service provider. They handle all our tax filings and compliance needs. The team is professional and always keeps us informed about deadlines.",
    date: "2023-12-05",
    service: "Tax Filing Services",
  },
  {
    id: 10,
    name: "Divya Sharma",
    position: "CA, Sharma & Associates",
    image: "/testimonials/divya-sharma.jpg",
    avatar: "/testimonials/divya-sharma.jpg",
    rating: 4,
    comment:
      "Good platform for business compliance. The dashboard is user-friendly and makes tracking easy. Support team is responsive and helpful.",
    date: "2023-12-01",
    service: "GST Filing",
  },
];

// Get featured testimonials (highest rated)
export const featuredTestimonials = testimonials
  .filter((t) => t.rating === 5)
  .slice(0, 3);

// Get recent testimonials
export const recentTestimonials = [...testimonials]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 4);

// Get testimonial by service
export const getTestimonialsByService = (serviceName) => {
  return testimonials.filter((t) => t.service === serviceName);
};

// Get average rating
export const getAverageRating = () => {
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return (total / testimonials.length).toFixed(1);
};

// Get rating distribution
export const getRatingDistribution = () => {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  testimonials.forEach((t) => {
    distribution[t.rating] = (distribution[t.rating] || 0) + 1;
  });
  return distribution;
};

export default testimonials;
