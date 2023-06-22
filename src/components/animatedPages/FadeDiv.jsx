import { motion } from "framer-motion";

export const FadeDiv = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
