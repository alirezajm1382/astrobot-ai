import React from 'react';
import { FaRocket, FaRobot, FaCreditCard, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';

const Support: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-gray-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Support Center</h1>
      <p className="mb-8 text-lg">Welcome to the Astrobot AI support hub. How can we assist you today?</p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FaRocket className="mr-3 text-blue-400" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3 flex items-center">
              <FaRobot className="mr-2 text-purple-400" />
              How do I get started with Astrobot AI?
            </h3>
            <p>Sign up on our website and follow our intuitive onboarding process. You'll be exploring the capabilities of Astrobot AI in minutes!</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3 flex items-center">
              <FaRobot className="mr-2 text-purple-400" />
              What features does Astrobot AI offer?
            </h3>
            <p>Astrobot AI provides cutting-edge natural language processing, advanced image recognition, real-time data analysis, and AI-driven personalized recommendations. Our system continuously evolves to meet your evolving needs.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3 flex items-center">
              <FaCreditCard className="mr-2 text-green-400" />
              How can I upgrade my subscription?
            </h3>
            <p>Access your account dashboard and navigate to 'Subscription'. You'll find a range of flexible plans designed to scale with your requirements.</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FaComments className="mr-3 text-blue-400" />
          Get in Touch
        </h2>
        <p className="mb-4">Can't find what you're looking for? Our support team is here to help:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <FaEnvelope className="text-2xl mr-3 text-blue-400" />
            <span>support@astrobotai.com</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <FaPhone className="text-2xl mr-3 text-green-400" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <FaComments className="text-2xl mr-3 text-purple-400" />
            <span>24/7 Live Chat on our website</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;