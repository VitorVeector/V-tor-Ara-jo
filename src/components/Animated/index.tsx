import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Contact } from '../../pages/Contact';
import { NoPage } from '../../pages/NoPage';

export const Animated = () => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </motion.div>
  );
};