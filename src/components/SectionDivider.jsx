import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut",
      }}
      className="mb-2 rounded"
      style={{
        height: "3px",
        width: "min(180px, 40vw)", // responsive width
        borderRadius: "2px",
        background: "linear-gradient(90deg, #915eff, #00ffc8)",
        transformOrigin: "center",
      }}
    />
  );
};

export default SectionDivider;
//***************************************** */
