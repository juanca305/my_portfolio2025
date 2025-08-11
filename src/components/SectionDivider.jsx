// // SectionDivider.jsx
// import React from "react";

// const SectionDivider = ({
//   width = "180px",
//   height = "3px",
//   marginBottom = "10px",
//   gradient = "linear-gradient(90deg, #915eff, #00ffc8)",
// }) => {
//   return (
//     <div
//       style={{
//         height,
//         marginBottom,
//         borderRadius: "2px",
//         background: gradient,
//         // marginLeft: "auto",
//         // marginRight: "auto",
//       }}
//       className="w-[120px] sm:w-[150px] md:w-[180px] max-w-full"
//     />
//   );
// };

// export default SectionDivider;
//***************************************** */
// // SectionDivider.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const SectionDivider = ({
//   width = "180px",
//   height = "3px",
//   marginBottom = "10px",
//   gradient = "linear-gradient(90deg, #915eff, #00ffc8)",
//   duration = 0.8,
//   delay = 0, // delay in seconds before fade in starts
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scaleX: 0 }}
//       animate={{ opacity: 1, scaleX: 1 }}
//       transition={{ duration, delay, ease: "easeOut" }}
//       style={{
//         height,
//         marginBottom,
//         borderRadius: "2px",
//         background: gradient,
//         // marginLeft: "auto",
//         // marginRight: "auto",
//         transformOrigin: "left",
//       }}
//       className="w-[120px] sm:w-[150px] md:w-[180px] max-w-full"
//     />
//   );
// };

// export default SectionDivider;
/**************************************************** */

// import React from "react";
// import { motion } from "framer-motion";

// const SectionDivider = ({
//   width = "180px",
//   height = "3px",
//   marginBottom = "10px",
//   gradient = "linear-gradient(90deg, #915eff, #00ffc8)",
//   duration = 1.2,
//   delay = 0.3,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scaleX: 0, scaleY: 0.5 }}
//       animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
//       transition={{
//         duration,
//         delay,
//         ease: [0.4, 0, 0.2, 1], // easeInOut cubic bezier
//       }}
//       style={{
//         height,
//         marginBottom,
//         borderRadius: "2px",
//         background: gradient,
//         // marginLeft: "auto",
//         // marginRight: "auto",
//         transformOrigin: "left center",
//       }}
//       className="w-[120px] sm:w-[150px] md:w-[180px] max-w-full"
//     />
//   );
// };

// export default SectionDivider;
//************************************************** */
// import { motion } from "framer-motion";

// const SectionDivider = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scaleX: 0 }}
//       whileInView={{ opacity: 1, scaleX: 1 }}
//       viewport={{ once: false, amount: 0.3 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.1,
//         ease: "easeOut",
//       }}
//       style={{
//         height: "3px",
//         width: "180px",
//         marginBottom: "10px",
//         borderRadius: "2px",
//         background: "linear-gradient(90deg, #915eff, #00ffc8)",
//         transformOrigin: "center", // important for growing from center
//       }}
//     />
//   );
// };

// export default SectionDivider;

//****************************************** */
// import { motion } from "framer-motion";

// const SectionDivider = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scaleX: 0 }}
//       whileInView={{ opacity: 1, scaleX: 1 }}
//       viewport={{ once: false, amount: 0.3 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.1,
//         ease: "easeOut",
//       }}
//       className="mb-2 rounded"
//       style={{
//         height: "3px",
//         width: "min(180px, 40vw)", // responsive width
//         borderRadius: "2px",
//         background: "linear-gradient(90deg, #915eff, #00ffc8)",
//         transformOrigin: "center",
//       }}
//     />
//   );
// };

// export default SectionDivider;
//****************************************** */
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



