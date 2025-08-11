//import Tilt from "react-tilt";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import SectionDivider from "./SectionDivider";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt
//     tiltMaxAngleX={45}
//     tiltMaxAngleY={45}
//     scale={1}
//     transitionSpeed={450}
//     className="xs:w-[250px] w-full"
//   >
//     <motion.div
//       // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       variants={fadeIn("right", "spring", index * 0.1, 0.75)} // less delay
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }} // triggers earlier
//       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//         <img
//           src={icon}
//           alt="web-development"
//           className="w-16 h-16 object-contain"
//         />

//         <h3 className="text-white text-[20px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", 0, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }} // re-triggers & earlier start
      transition={{ delay: index * 0.15 }} // small stagger per card
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <SectionDivider />
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div> */}

      {/* HEADER SECTION */}
      <div className="mb-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <SectionDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.sectionSubText}
        >
          Introduction
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.sectionHeadText}
        >
          About Me
        </motion.h2>
      </div>

      <motion.div
        variants={fadeIn("", "tween", 0.3, 2)} // smoother timing
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {/* I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life! */}
        {/* I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Next.js, Node.js, and Three.js. I have hands-on experience building full-stack applications with MongoDB and integrating APIs to deliver dynamic, data-driven solutions. I'm a quick learner who collaborates closely with clients to create efficient, scalable, and user-friendly products that solve real-world problems. Let's work together to bring your ideas to life! */}

        {/* I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Next.js, Node.js, and Three.js. I build full-stack applications using MongoDB and Express.js, integrate third-party APIs, and work with platforms like Stripe for payments and Sanity for content management. I'm a quick learner who collaborates closely with clients to craft efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!. */}

        {/* As a full-stack developer passionate about crafting smooth, responsive
          user experiences, I specialize in building dynamic web apps using
          React, Next.js, Node.js, Express and MongoDB. I’ve worked on everything from
          3D visuals with Three.js to integrating real-time APIs, payment
          systems like Stripe, and content platforms like Sanity — all with
          performance and maintainability in mind.
          <br />
          
          My approach balances creativity with precision: I love bringing clean
          UI ideas to life with tools like Tailwind CSS and Framer Motion while
          keeping scalability at the core of every backend decision. Whether
          you're launching a product or refining an existing one, <span className="text-[#915eff]">I’m here to help turn your vision into something people love to use</span>. */}

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I turn ideas into responsive, performant web experiences that feel
          intuitive and engaging. Whether it’s crafting fluid interfaces with
          React and Framer Motion or structuring reliable backend logic with
          Node and MongoDB, I build with both users and long-term scalability in
          mind.
          <br />
          <br />
          Beyond just writing code, I value clean architecture, thoughtful UX,
          and collaborating closely with clients or teams to refine every
          detail. From integrating 3D visuals and third-party APIs to optimizing
          performance across devices, I approach every challenge with
          creativity, curiosity, and a strong focus on impact.
          <br />
          <br />
          <span className="text-[#915eff] text-[22px]">
            Let’s build something people will love to interact with.
          </span>
        </motion.p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
//********************************************************* */

// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";
// import SectionDivider from "./SectionDivider";

// // Parent container variant for stagger effect
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25, // controls gap between each card animation
//     },
//   },
// };

// // Child card variant
// const cardVariant = {
//   hidden: { opacity: 0, y: 50 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", duration: 0.75 },
//   },
// };

// const ServiceCard = ({ title, icon }) => (
//   <Tilt
//     tiltMaxAngleX={45}
//     tiltMaxAngleY={45}
//     scale={1}
//     transitionSpeed={450}
//     className="xs:w-[250px] w-full"
//   >
//     <motion.div
//       variants={cardVariant} // use child variant
//       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//         <img
//           src={icon}
//           alt={title}
//           className="w-16 h-16 object-contain"
//         />
//         <h3 className="text-white text-[20px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <SectionDivider />
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         <p>
//           I turn ideas into responsive, performant web experiences that feel
//           intuitive and engaging. Whether it’s crafting fluid interfaces with
//           React and Framer Motion or structuring reliable backend logic with
//           Node and MongoDB, I build with both users and long-term scalability in
//           mind.
//           <br />
//           <br />
//           Beyond just writing code, I value clean architecture, thoughtful UX,
//           and collaborating closely with clients or teams to refine every
//           detail. From integrating 3D visuals and third-party APIs to optimizing
//           performance across devices, I approach every challenge with
//           creativity, curiosity, and a strong focus on impact.
//           <br />
//           <br />
//           <span className="text-[#915eff] text-[22px]">
//             Let’s build something people will love to interact with.
//           </span>
//         </p>
//       </motion.div>

//       {/* Staggered card animation */}
//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.2 }}
//         className="mt-20 flex flex-wrap gap-10"
//       >
//         {services.map((service) => (
//           <ServiceCard key={service.title} {...service} />
//         ))}
//       </motion.div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");
