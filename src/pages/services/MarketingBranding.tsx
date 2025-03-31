import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Users } from 'lucide-react';

const MarketingBranding = () => {
  const sections = [
    {
      icon: <Search className="h-8 w-8 text-neon-green" />,
      title: "Digital Marketing Solutions",
      description: "A strong digital presence is crucial for brand visibility and customer engagement.",
      benefits: [
        "Search Engine Optimisation, Search Engine Marketing and social media marketing strategies",
        "Content marketing and brand storytelling",
        "Website and e-commerce platform development"
      ]
    },
    {
      icon: <Palette className="h-8 w-8 text-neon-green" />,
      title: "Brand Development & Positioning",
      description: "A well-defined brand identity differentiates businesses from competitors.",
      benefits: [
        "Corporate branding and identity creation",
        "Customer engagement and experience enhancement",
        "Market research and consumer behavior analysis"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-neon-green" />,
      title: "Sales Strategy & Business Development",
      description: "Sales are the lifeblood of any business.",
      benefits: [
        "Sales funnel optimization and lead generation",
        "Customer relationship management (CRM) solutions",
        "Training on advanced sales techniques and negotiation"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Marketing & <span className="text-neon-green">Branding Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative marketing strategies to enhance your brand presence and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900/30 rounded-lg p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">{section.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <p className="text-gray-400 mb-6">{section.description}</p>
                    <ul className="space-y-3">
                      {section.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="h-2 w-2 bg-neon-green rounded-full" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MarketingBranding;