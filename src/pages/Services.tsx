import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { BarChart, Brain, Users, Target, ArrowRight } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Brain className="h-12 w-12 text-neon-green" />, 
      title: 'Technology & IT Solutions',
      path: '/services/technology-solutions',
      description: 'Cutting-edge tech solutions for modern business challenges.',
      features: [
        'Digital Transformation',
        'Cloud Solutions',
        'Custom Software',
        'Tech Stack Optimization',
      ],
      image: 'https://img.freepik.com/premium-photo/cpu-computer-chip-background_147644-162.jpg?ga=GA1.1.1040902873.1743194500&semt=ais_hybrid',
    },
    {
      icon: <BarChart className="h-12 w-12 text-neon-green" />, 
      title: 'Business Strategy & Operations',
      path: '/services/business-strategy',
      description: 'Develop winning strategies that drive growth and innovation.',
      features: [
        'Corporate Strategy & Business Growth',
        'Risk Management & Compliance',
        'Financial & Investment Advisory',
      ],
      image: 'https://img.freepik.com/premium-photo/diversity-people-talk-international-conference-partnership_53876-22037.jpg?ga=GA1.1.2037332277.1743240100&semt=ais_hybrid',
    },
    {
      icon: <Users className="h-12 w-12 text-neon-green" />, 
      title: 'Marketing & Branding Solutions',
      path: '/services/marketing-branding',
      description: 'Build high-performing teams that deliver exceptional results.',
      features: [
        'Digital Marketing & Online Presence',
        'Brand Development & Positioning',
        'Sales Strategy & Business Development',
      ],
      image: 'https://img.freepik.com/free-photo/black-businessman-using-computer-laptop_53876-24736.jpg?ga=GA1.1.2037332277.1743240100&semt=ais_hybrid',
    },
    {
      icon: <Users className="h-12 w-12 text-neon-green" />, 
      title: 'Training & Capacity Building',
      path: '/services/training-capacity',
      description: 'Enhancing skills and expertise for growth.',
      features: [
        'Corporate Training Programs',
        'Workforce Development & Upskilling',
      ],
      image: 'https://img.freepik.com/premium-photo/business-whiteboard-presentation-black-man-as-leader-training-feedback-planning-ideas-discussion-seminar-brainstorming-marketing-meeting-office-creative-workshop-teamwork_590464-182220.jpg?ga=GA1.1.2037332277.1743240100&semt=ais_hybrid',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-6xl font-bold mb-6">
            Our <span className="text-neon-green">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive consulting solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-gray-400 text-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Target className="h-5 w-5 text-neon-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(service.path)}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="bg-gray-900/50 p-8 rounded-lg">
                  <img src={service.image} alt={service.title} className="rounded-lg shadow-xl w-full h-64 object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
