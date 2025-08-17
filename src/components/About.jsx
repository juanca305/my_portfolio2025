import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import SectionDivider from "./SectionDivider";

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
          With a{" "}
          <span className="text-white font-semibold">
            Bachelor’s degree in Computer Science
          </span>
          , I bring a strong foundation in algorithms, data structures, and
          software engineering principles—skills that shape how I architect
          projects for real-world use.
          <br />
          <br />
          Beyond just writing code, I value clean architecture, thoughtful UX,
          and collaborating closely with clients or teams to refine every
          detail. From integrating 3D visuals and third-party APIs to optimizing
          performance across devices, I approach every challenge with
          creativity, curiosity, and a strong focus on impact.
          <br />
          <br />
          {/* Separate motion.p for the last line with longer delay */}
          {/* <motion.p
            variants={fadeIn("", "", 0.25, 5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 2.5 }} // <-- appears last
            className="mt-4 text-[#915eff] text-[22px] font-semibold"
          >
            Let’s build something people will love to interact with.
          </motion.p> */}
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        animate="show" // animate immediately on mount
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 justify-items-stretch"
        viewport={{ once: false, amount: 0.1 }} // more sensitive on mobile
      >
        <motion.span
          className="bg-gradient-to-r from-[#6a4fff] to-[#7d59ff] text-white px-4 py-1 rounded-full text-base font-semibold shadow-md flex justify-between items-center gap-1"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0,
            ease: "easeInOut",
          }}
          style={{
            boxShadow:
              "0 8px 20px rgba(106, 79, 255, 0.25), 0 0 15px rgba(106, 79, 255, 0.15)",
          }}
        >
          <span className="text-3xl">🎓</span>
          <span className="text-sm whitespace-normal break-words text-center">Computer Science</span>
        </motion.span>

        <motion.span
          className="bg-gradient-to-r from-[#2ca66d] to-[#38c58b] text-white px-4 py-1 rounded-full text-base font-semibold shadow-md flex justify-between items-center gap-1"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 2.1,
            repeat: Infinity,
            delay: 0.2,
            ease: "easeInOut",
          }}
          style={{
            boxShadow:
              "0 8px 20px rgba(106, 79, 255, 0.25), 0 0 15px rgba(106, 79, 255, 0.15)",
          }}
        >
          <span className="text-3xl">⚡</span>
          <span className="text-sm whitespace-normal break-words text-center">MERN Stack</span>
        </motion.span>

        <motion.span
          className="bg-gradient-to-r from-[#1e63d0] to-[#3391ff] text-white px-4 py-1 rounded-full text-base font-semibold shadow-md flex justify-between items-center gap-1"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: 0.4,
            ease: "easeInOut",
          }}
          style={{
            boxShadow:
              "0 8px 20px rgba(106, 79, 255, 0.25), 0 0 15px rgba(106, 79, 255, 0.15)",
          }}
        >
          {/* <span className="text-3xl">🎨</span> */}
          <span className="text-3xl">💫</span>
          <span className="text-sm whitespace-normal break-words text-center">3D Motion</span>
        </motion.span>

        <motion.span
          className="bg-gradient-to-r from-[#d96b2f] to-[#ff925d] text-white px-4 py-1 rounded-full text-base font-semibold shadow-md flex justify-between items-center gap-1 w-full max-w-[200px]"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
            delay: 0.6,
            ease: "easeInOut",
          }}
          style={{
            boxShadow:
              "0 8px 20px rgba(106, 79, 255, 0.25), 0 0 15px rgba(106, 79, 255, 0.15)",
          }}
        >
          <span className="text-3xl">☁️</span>
          <span className="text-sm whitespace-normal break-words text-center">AWS & Cloud</span>
        </motion.span>
      </motion.div>

      <br />
      <br />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }} // triggers on scroll up/down
        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }} // smooth & slow fade-in
        className="mt-4 text-[#915eff] text-[22px] font-semibold"
      >
        Let’s build something people will love to interact with.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
