
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';

const PageCTA = () => {
  return (
    <section className="mt-16 mb-8">
      {/* Top Revenue Banner */}
      <motion.div 
        className="bg-white py-4 px-6 flex justify-between items-center shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-gray-800">
          Increase your Practice Revenue by up to 30% With ClaimsMD
        </h3>
        
        <Button size="lg" className="bg-claimsBlue hover:bg-blue-800 transform hover:scale-105 transition-transform" asChild>
          <Link to="/contact">
            Get Started
          </Link>
        </Button>
      </motion.div>
      
      {/* Main CTA Box */}
      <motion.div 
        className="bg-gradient-to-r from-claimsBlue to-indigo-800 text-white p-8 flex flex-col md:flex-row justify-between items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex-1">
          <motion.h2 
            className="text-3xl font-bold mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Schedule a free Demo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            A member of our team will get in touch with you in 12 hours.
          </motion.p>
        </div>
        
        <motion.div 
          className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <PhoneCall className="text-white" size={24} />
          </div>
          <div>
            <p className="uppercase text-xs text-white/70">CALL US AT</p>
            <p className="text-xl font-bold">800-640-6409</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PageCTA;
