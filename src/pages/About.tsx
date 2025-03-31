import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Award, Users, Globe, BookOpen,ShieldCheck,Lightbulb, UserCheck, Star  } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              About <span className="text-neon-green">QuantamBiz</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a team of passionate consultants dedicated to transforming businesses
              through innovative solutions and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="section-padding bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <Target className="h-8 w-8 text-neon-green flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-400">
                  To be Zimbabwe’s most trusted and innovative business consultancy firm, renowned for delivering
                  transformative solutions that redefine corporate success and drive sustainable economic growth.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <Globe className="h-8 w-8 text-neon-green flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-400">
                    To be the leading catalyst for business transformation, recognized globally
                    for our innovative approach and measurable impact on client success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-8 w-8 text-neon-green" />,
                title: 'Integrity',
                description: 'We uphold transparency, honesty and ethical business practices in all our engagements.',
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-neon-green" />,
                title: 'Innovation',
                description: 'We embrace cutting-edge technologies and strategies to provide forward-thinking business solutions.',
              },
              {
                icon: <Award className="h-8 w-8 text-neon-green" />,
                title: 'Excellence',
                description: 'We are committed to delivering top-quality services that exceed our clients expectations.',
              },
              {
                icon: <UserCheck className="h-8 w-8 text-neon-green" />,
                title: 'Client-Centric Approach',
                description: 'Our clients are at the heart of our solutions, ensuring personalized and impactful results.',
              },
              {
                icon: <Users className="h-8 w-8 text-neon-green" />,
                title: 'Collaboration',
                description: 'We foster teamwork and partnerships to create synergy and achieve sustainable success.',
              },
              {
                icon: <BookOpen className="h-8 w-8 text-neon-green" />,
                title: 'Continuous Learning',
                description: 'We prioritize growth and development, staying ahead of industry trends to provide the best solutions.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900/50 p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;