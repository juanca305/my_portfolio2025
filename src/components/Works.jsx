import { useEffect, useState } from "react";

//import Tilt from "react-tilt";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

import { styles } from "../styles";
//import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { GithubIcon } from "lucide-react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
  date,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      variants={
        isMobile
          ? fadeIn("up", "spring", 0, 0.5) // minimal delay for mobile
          : fadeIn("up", "spring", index * 0.1, 0.5) // staggered for desktop
      }
    >
      <Tilt
        tiltMaxAngleX={isMobile ? 0 : 45}
        tiltMaxAngleY={isMobile ? 0 : 45}
        scale={1}
        transitionSpeed={isMobile ? 0 : 450}
        className="bg-tertiary hover:bg-gradient-to-br hover:from-[#1a1a2e] hover:to-[#0f0f1a] p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between h-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-[#2c2c3d] hover:-translate-y-4 transition-transform duration-300"
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />

          <div className="absolute inset-0 flex justify-end items-start m-3 gap-2">
            {/* Live site icon */}
            <div className="relative group">
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                Live Site
              </div>
              <div
                onClick={() => window.open(live_site_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:shadow-lg transition-transform duration-300"
              >
                <Globe
                  size={20}
                  className="text-white group-hover:text-blue-400 transition-colors duration-300"
                />
              </div>
            </div>

            {/* GitHub icon */}
            <div className="relative group">
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                View Code
              </div>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:shadow-lg transition-transform duration-300"
              >
                <GithubIcon
                  size={20}
                  className="text-white group-hover:text-blue-400 transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-between min-h-[160px] h-full">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

          {date && (
            <div className="mt-4 mb-2 w-fit px-3 py-1 rounded-full text-[12px] font-medium bg-gradient-to-r from-[#1e1e2e] to-[#0f0f1f] text-gray-300 border border-[#3a3a50] shadow-sm shadow-black/30 flex items-center gap-2 hover:scale-[1.03] transition-transform duration-200">
              <span className="text-blue-400">📅</span>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[12px] px-3 py-1 rounded-full font-medium border border-[#2a2a40] shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <p className={styles.sectionSubText}>My Projects...</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.div
        className="w-full flex"
        variants={fadeIn("", "", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through
          real-world examples. Each project is briefly described with links to
          code repositories and live demos. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {[...projects]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
