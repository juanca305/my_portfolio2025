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
          {/* <span className="font-semibold bg-gradient-to-r from-[#00cea8] to-[#bf61ff] bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent text-gradient-shadow">
            Bachelor’s degree in Computer Science
          </span> */}
          <motion.span
            className="font-semibold bg-gradient-to-r from-[#00cea8] to-[#bf61ff] bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent text-gradient-shadow"
            initial={{ opacity: 0, y: 5 }} // start slightly below and invisible
            animate={{ opacity: 1, y: 0 }} // fade in and slide up
            transition={{ duration: 1.5, ease: "easeOut" }} // smooth timing
          >
            Bachelor’s degree in Computer Science
          </motion.span>
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
        </motion.p>
      </motion.div>

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
