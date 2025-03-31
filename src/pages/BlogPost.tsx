import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const posts = [
    {
      slug: 'future-of-digital-transformation',
      title: 'The Future of Digital Transformation',
      excerpt: 'Exploring the latest trends and technologies shaping business transformation.',
      author: 'John Smith',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'Technology',
      content: `Digital transformation is revolutionizing how businesses operate in the modern world. 
      From artificial intelligence to cloud computing, organizations are leveraging cutting-edge 
      technologies to enhance efficiency, improve customer experience, and drive innovation.
      
      The future of digital transformation holds even more promise, with emerging technologies 
      set to reshape industries and create new opportunities for growth and development.`
    },
    {
      slug: 'building-high-performance-teams',
      title: 'Building High-Performance Teams',
      excerpt: 'Key strategies for developing and maintaining successful teams in modern organizations.',
      author: 'Sarah Johnson',
      date: 'March 12, 2024',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
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
      author: 'Michael Brown',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'Strategy',
      content: `Innovation is no longer just a buzzword - it's a necessity for business survival 
      and growth in today's rapidly evolving market landscape. Companies must embrace new 
      approaches to strategy development and execution.
      
      Learn how successful organizations are incorporating innovation into their strategic 
      planning and decision-making processes.`
    },
  ];

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-20 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <article className="section-padding">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate('/blog')}
            className="text-neon-green hover:text-white transition-colors inline-flex items-center gap-2 mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </button>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="mb-8">
            <span className="text-neon-green text-sm font-medium">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPost;