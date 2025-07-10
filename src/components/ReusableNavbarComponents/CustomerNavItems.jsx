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
        className="text-gray-300 hover:text-white px-4 py-2 rounded-md transition-colors duration-300"
      >
        SERVICES IN YOUR AREA
      </motion.button>
    </Tippy>
  );
}
