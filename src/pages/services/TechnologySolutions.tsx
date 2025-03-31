import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldAlert, Database, Code, FileSearch } from 'lucide-react';

const TechnologySolutions = () => {
  const sections = [
    {
      icon: <Shield className="h-8 w-8 text-neon-green" />,
      title: "IT Governance & Compliance",
      description: "In today's regulatory environment, businesses must ensure that their IT systems align with industry standards and best practices.",
      benefits: [
        "Align IT strategies with business objectives",
        "Ensure compliance with industry regulations and standards",
        "Implement risk management frameworks for IT operations"
      ]
    },
    {
      icon: <ShieldAlert className="h-8 w-8 text-neon-green" />,
      title: "Cybersecurity Services",
      description: "With the increasing threats of cyber-attacks, organizations must prioritize cybersecurity to protect their assets and customer data.",
      benefits: [
        "Cyber risk assessment and management",
        "Network and infrastructure security solutions",
        "Data protection, threat intelligence"
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-neon-green" />,
      title: "Business Intelligence & Data Analytics",
      description: "Data-driven decision-making is critical for business success.",
      benefits: [
        "Advanced data visualization and reporting",
        "AI-driven business insights and predictive analytics",
        "Data warehousing and integration for informed decision-making"
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-neon-green" />,
      title: "Software Development & Automation",
      description: "Custom software solutions and automation can significantly enhance business efficiency.",
      benefits: [
        "Custom software development tailored to business needs",
        "Process automation solutions to enhance efficiency",
        "Cloud-based applications and enterprise system integrations"
      ]
    },
    {
      icon: <FileSearch className="h-8 w-8 text-neon-green" />,
      title: "IT Audit & Risk Assessment",
      description: "An effective IT audit ensures that systems operate efficiently while mitigating risks.",
      benefits: [
        "Comprehensive IT system evaluation and security audits",
        "Identification of vulnerabilities and compliance gaps",
        "Remediation strategies and security enhancement recommendations"
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
              Technology & <span className="text-neon-green">IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive IT solutions to drive your business forward in the digital age
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

export default TechnologySolutions;