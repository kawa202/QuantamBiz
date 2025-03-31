import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Users, BarChart, Brain } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <BarChart className="h-8 w-8 text-neon-green" />,
      title: 'Business Strategy',
      description: 'Develop winning strategies that drive growth and innovation.',
      link: '/services/business-strategy'
    },
    {
      icon: <Brain className="h-8 w-8 text-neon-green" />,
      title: 'Technology Solutions',
      description: 'Cutting-edge tech solutions for modern business challenges.',
      link: '/services/technology-solutions'
    },
    {
      icon: <Users className="h-8 w-8 text-neon-green" />,
      title: 'Team Development',
      description: 'Build high-performing teams that deliver exceptional results.',
      link: '/services/training-capacity'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Transform Your Business
            <span className="text-neon-green"> Future</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Strategic consulting solutions that drive innovation and growth in the digital age
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-primary">Get Started</button>
            <button className="text-white flex items-center gap-2 hover:text-neon-green transition-colors"
              onClick={() => navigate('/about')}
              >
              Learn More <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      
      {/* Services Section */}
      <section ref={ref} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block bg-gray-900/50 p-8 rounded-lg hover:bg-gray-900/80 transition-all duration-300"
                >
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => navigate('/services')}
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose <span className="text-neon-green">Us</span>
              </h2>
              <div className="space-y-4">
                {[
                  'Industry-leading expertise',
                  'Proven track record of success',
                  'Innovative solutions',
                  'Dedicated support team',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://img.freepik.com/premium-photo/hiring-success-meeting-business-people-with-handshake-with-applause-work-happy-support-black-man-shaking-hands-with-manager-with-workers-clapping-partnership-welcome_590464-182460.jpg?ga=GA1.1.2037332277.1743240100&semt=ais_hybrid"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;