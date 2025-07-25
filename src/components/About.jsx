import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
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
          <span className="text-[#915eff]">
            Let’s build something people will love to interact with.
          </span>
        </motion.p>
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
