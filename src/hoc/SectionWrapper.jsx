import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;

// //******* CONTINUED AT 1: 22 */

/////////////////////////////////////////////////////////////////

// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { staggerContainer } from "../utils/motion";

// const SectionWrapper = (Component, idName) =>
//   function HOC() {
//     return (
//       <motion.section
//         variants={staggerContainer()}
//         initial="hidden"
//         animate="show" // ✅ Trigger animation on load, not scroll
//         className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//       >
//         {/* Anchor support for scrolling */}
//         <span className="hash-span" id={idName}>
//           &nbsp;
//         </span>

//         <Component />
//       </motion.section>
//     );
//   };

// export default SectionWrapper;

////////******************************** */
//******************************************** */


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { staggerContainer } from "../utils/motion";

// const SectionWrapper = (Component, idName) => {
//   return function HOC() {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//       const checkWidth = () => setIsMobile(window.innerWidth < 1024); // Treat <1024px as mobile/tablet
//       checkWidth();
//       window.addEventListener("resize", checkWidth);
//       return () => window.removeEventListener("resize", checkWidth);
//     }, []);

//     return (
//       <motion.section
//         variants={staggerContainer()}
//         initial="hidden"
//         {...(isMobile
//           ? { animate: "show" }
//           : { whileInView: "show", viewport: { once: true, amount: 0.25 } })}
//         className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//       >
//         <span className="hash-span" id={idName}>
//           &nbsp;
//         </span>
//         <Component />
//       </motion.section>
//     );
//   };
// };

// export default SectionWrapper;


