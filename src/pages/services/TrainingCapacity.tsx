import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users } from 'lucide-react';

const TrainingCapacity = () => {
  const sections = [
    {
      icon: <BookOpen className="h-8 w-8 text-neon-green" />,
      title: "Corporate Training Programs",
      description: "Skilled employees drive business success.",
      benefits: [
        "IT governance, cybersecurity and compliance training",
        "Sales, marketing and customer service excellence workshops"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-neon-green" />,
      title: "Workforce Development & Upskilling",
      description: "Continuous learning is essential in an evolving business landscape.",
      benefits: [
        "Customized training solutions for emerging industry trends",
        "Professional certification courses and mentorship programs",
        "Employee engagement and productivity enhancement programs"
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
              Training & <span className="text-neon-green">Capacity Building</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive training solutions to develop your workforce and drive excellence
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

export default TrainingCapacity;