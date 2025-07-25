import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { learningNow } from "../constants";

const LearningCard = ({ index, title, description, icon, progress }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1 }}
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    whileHover={{
      scale: 1.05,
      rotateZ: 1,
      boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-black-200 p-6 rounded-3xl w-[280px] flex flex-col items-center text-center shadow-md border border-[#2a2a40] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
  >
    <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-md backdrop-blur-sm">
      <img
        src={icon}
        alt={title}
        className="w-10 h-10 object-contain filter invert"
      />
    </div>

    <h3 className="text-white text-lg font-semibold mt-4">{title}</h3>
    <div className="mt-2 min-h-[60px]">
      <p className="text-sm text-gray-400">{description}</p>
    </div>

    {/* Progress Bar */}
    <div className="w-full mt-4 group cursor-pointer ">
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden ">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full bg-gradient-to-r from-blue-400 via-sky-500 to-purple-500 rounded-full"
        ></motion.div>
      </div>
      <p className="mt-1 text-xs text-gray-400 text-right">{progress}%</p>
    </div>
  </motion.div>
);

const LearningNow = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <p className={styles.sectionSubText}>What I'm Currently Exploring</p>
          <h2 className={styles.sectionHeadText}>Learning Now.</h2>
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}
      >
        {learningNow.map((item, index) => (
          <LearningCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(LearningNow, "");
