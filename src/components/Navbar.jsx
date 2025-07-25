import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, jc_logo_react_ok } from "../assets";

import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 md:py-3 lg:py-3 fixed top-0 z-20 bg-primary`}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-wrap justify-between items-center max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className=" flex items-center gap-2 min-w-[200px]"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full overflow-hidden mr-2"
            whileHover={{
              scale: 1.15,
              rotate: 8,
              boxShadow: "0px 0px 25px rgba(145,94,255,0.8)",
            }}
            animate={{
              y: [0, -4, 0],
              rotate: [0, 1.5, -1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <img
              src={jc_logo_react_ok}
              alt="logo"
              className="w-full h-full object-contain cursor-pointer"
            />
          </motion.div>

          <p className=" text-white text-[18px] font-bold cursor-pointer flex truncate max-w-[140px] sm:max-w-none transition-colors duration-300 ease-in-out hover:text-[#915eff] hover:scale-105">
            Juan Carlos &nbsp;{" "}
          </p>
        </Link>

        <motion.ul
          className="list-none hidden sm:flex flex-row flex-wrap justify-end items-center gap-4 md:gap-5 lg:gap-12 "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 1.5, // waits after logo animation starts
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                y: [0, -3, 0], // quick up and back down bounce
                textShadow: "0 0 6px rgba(255,255,255,0.7)",
              }}
              className={`relative transition-all duration-300 ease-in-out
                ${active === link.title ? "text-white" : "text-secondary"}
                text-[16px] md:text-[18px] font-medium cursor-pointer
                hover:text-white 
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-0 hover:after:w-full after:h-[2px]
                after:bg-gradient-to-r from-[#915eff] to-cyan-400 after:transition-all after:duration-300`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </motion.ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`relative transition-all duration-300 ease-in-out
                    ${active === link.title ? "text-white" : "text-secondary"}
                    text-[16px] font-medium cursor-pointer
                    hover:text-white hover:scale-105
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:w-0 hover:after:w-full after:h-[2px]
                    after:bg-gradient-to-r from-[#915eff] to-cyan-400 after:transition-all after:duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
