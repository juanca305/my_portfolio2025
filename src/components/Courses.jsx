import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { completedCourses } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import SectionDivider from "./SectionDivider";

const CourseCard = ({ index, title, icon, instructor, description }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }} // triggers as soon as 20% is visible
      initial="hidden"
      className="w-full h-[360px] green-pink-gradient p-[1px] rounded-[20px] shadow-card flex"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-4 w-full h-full flex flex-col items-center text-center">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[18px] font-bold mt-4">{title}</h3>

        <p className="text-sm text-blue-400 mt-2">{instructor}</p>

        <p className="mt-2 text-secondary text-[14px] text-left">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Courses = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <SectionDivider />
        <p className={styles.sectionSubText}>What I've Learned lately</p>
        <h2 className={styles.sectionHeadText}>
          Completed Courses & Learning Journey.
        </h2>
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <SectionDivider />
      </motion.div>

      {/* <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className={styles.sectionSubText}
      >
        What I've Learned lately
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className={styles.sectionHeadText}
      >
        Completed Courses & Learning Journey.
      </motion.h2> */}

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className={`${styles.sectionSubText}`}
      >
        What I've Learned lately
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className={`${styles.sectionHeadText} `}
      >
        Completed Courses & Learning Journey.
      </motion.h2>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {completedCourses.map((course, index) => (
          <CourseCard key={course.title} index={index} {...course} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Courses, "courses");
