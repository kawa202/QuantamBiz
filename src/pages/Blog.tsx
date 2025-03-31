import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts = [
    {
      slug: 'future-of-digital-transformation',
      title: 'The Future of Digital Transformation',
      excerpt: 'Exploring the latest trends and technologies shaping business transformation.',
      author: 'Robson Kawa',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'Technology',
      content: `Digital transformation is revolutionizing how businesses operate in the modern world. 
      From artificial intelligence to cloud computing, organizations are leveraging cutting-edge 
      technologies to enhance efficiency, improve customer experience, and drive innovation.
      
      The future of digital transformation holds even more promise, with emerging technologies 
      set to reshape industries and create new opportunities for growth and development.`,
    },
    {
      slug: 'building-high-performance-teams',
      title: 'Building High-Performance Teams',
      excerpt: 'Key strategies for developing and maintaining successful teams in modern organizations.',
      author: 'Anesu Chada',
      date: 'March 12, 2024',
      image: 'https://img.freepik.com/premium-photo/business-whiteboard-presentation-black-man-as-leader-training-feedback-planning-ideas-discussion-seminar-brainstorming-marketing-meeting-office-creative-workshop-teamwork_590464-182220.jpg?ga=GA1.1.2037332277.1743240100&semt=ais_hybrid',
      category: 'Leadership',
      content: `High-performance teams are the backbone of successful organizations. Creating and 
      maintaining such teams requires a careful balance of leadership, culture, and individual 
      development.
      
      This article explores proven strategies for building teams that consistently deliver 
      exceptional results while maintaining high levels of engagement and satisfaction.`
    },
    {
      slug: 'innovation-in-business-strategy',
      title: 'Innovation in Business Strategy',
      excerpt: 'How innovative approaches are reshaping traditional business strategies.',
      author: 'Michael Madziva',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEJ1c2luZXNzJTIwc3VjY2VzcyUyMGlsbHVzdHJhdGlvbnN8ZW58MHx8MHx8fDA%3D',
      category: 'Strategy',
      content: `Innovation is no longer just a buzzword - it's a necessity for business survival 
      and growth in today's rapidly evolving market landscape. Companies must embrace new 
      approaches to strategy development and execution.
      
      Learn how successful organizations are incorporating innovation into their strategic 
      planning and decision-making processes.`
    },
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
              Our <span className="text-neon-green">Blog</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights and perspectives on business, technology, and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section ref={ref} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900/50 rounded-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-neon-green text-sm font-medium">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="mt-4 text-neon-green hover:text-white transition-colors flex items-center gap-2"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;