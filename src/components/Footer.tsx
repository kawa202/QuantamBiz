import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {

  const services = [
    { title: 'Business Strategy & Operations', path: '/services/business-strategy' },
    { title: 'Technology & IT Solutions', path: '/services/technology-solutions' },
    { title: 'Marketing & Branding Solutions', path: '/services/marketing-branding' },
    { title: 'Training & Capacity Building', path: '/services/training-capacity' },
  ];

  return (
    <footer className="bg-gray-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              
              <img 
              src={logo} 
              alt="QuantamBiz Logo" 
              className="h-12 w-auto" // Adjust height as needed
            />
              <span className="text-xl font-bold">QuantamBs</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative solutions and strategic consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-green transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.title}>
                <Link
                  to={service.path}
                  className="text-gray-400 hover:text-neon-green transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neon-green" />
                <span className="text-gray-400">quantambizsolutions@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-neon-green" />
                <span className="text-gray-400">+263 776 183 405</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-neon-green" />
                <span className="text-gray-400">123 Jason Moyo,12th floor<br />Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} QuantamBiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;