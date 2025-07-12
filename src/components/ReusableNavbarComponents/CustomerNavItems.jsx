import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function CustomerNavItems({ navigate }) {
  return (
    <Tippy content="Find services available in your area" placement="top" delay={[0, 100]}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'tween', stiffness: 300 }}
        onClick={() => navigate('/customer-dashboard/get-services')}
        className="text-[#4F46E5] hover:scale-105 px-4 py-2 rounded-md transition-colors duration-300"
      >
        Services in Your Area
      </motion.button>
    </Tippy>
  );
}
