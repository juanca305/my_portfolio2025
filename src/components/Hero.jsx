import { motion } from "framer-motion";
import { styles } from "../styles";
//import { ComputersCanvas, MergedCanvas } from "./canvas";
import { MergedCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 pb-32 md:pb-16 lg:pb-0`}
      > */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[60px] md:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 pb-32 md:pb-16 lg:pb-0`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Intro Text (Some more PENDING!!! space)*/}
        {/* <div className="flex-1 mb-2">  */}
        <div className="flex-1 mb-10 sm:mb-2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${styles.heroHeadText} text-white max-w-lg sm:max-w-xl break-words`}
          >
            Hi, I'm <span className="text-[#915eff]">Juan Carlos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`${styles.heroSubText} mt-2 mb-6 text-white-100 max-w-md sm:max-w-lg break-normal`}
          >
            I develop <span className="text-[#915eff]">3D visuals</span> user{" "}
            <br className="sm:block hidden mb-2" /> interfaces and web
            applications.
          </motion.p>
        </div>

        {/* Profile Image */}
        <div className="hidden sm:flex flex-1 justify-center items-center relative">
          <div className="mt-6 sm:ml-32 ml-10 relative">
            <motion.img
              src="/juanca_5.png"
              alt="Portrait of web developer Juan Carlos smiling"
              className="rounded-full w-48 h-48 object-cover scale-75 border-4 border-[#915eff] shadow-[0_4px_15px_rgba(145,94,255,0.5)]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, 15, 0],
                rotateZ: [0, 5, 0],
              }}
              transition={{
                opacity: { duration: 1.5, delay: 1.5 },
                scale: { duration: 1.5, delay: 1.5 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                rotateZ: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              }}
            />

            {/* Optional glow behind image */}
            <motion.div
              className="absolute inset-0 w-full h-full rounded-full bg-[#915eff]/20 blur-2xl -z-10"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>
        </div>
      </div>

      <MergedCanvas scene="computers" />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
