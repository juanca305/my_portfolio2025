import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { CheckCircle, XCircle } from "lucide-react";

const Contact = () => {
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_t5bsh1x",
        "template_kd9ktwi",
        {
          from_name: form.name,
          to_name: "Juan Carlos",
          from_email: form.email,
          to_email: "jc.rdguez64@gmail.com",
          message: form.message,
        },
        "mXD8pEO6WEymBAvUi"
      )
      .then(() => {
        setLoading(false);
        setFeedback({
          type: "success",
          message: "Thank you, I will get back to you as soon as possible.",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setFeedback({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      });
  };

  useEffect(() => {
    if (feedback.message) {
      // Add fadeOut class before clearing
      const fadeTimer = setTimeout(() => {
        const toast = document.getElementById("feedback-toast");
        if (toast) toast.classList.add("animate-fadeOut");
      }, 4500); // Start fade-out 0.5s before removal

      // Actually clear it after fade out
      const clearTimer = setTimeout(() => {
        setFeedback({ type: "", message: "" });
      }, 5000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [feedback]);

  return (
    <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch from everywhere</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col ">
            <span className=" text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col ">
            <span className=" text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col ">
            <span className=" text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {feedback.message && (
            <div
              id="feedback-toast"
              className={`mt-4 flex items-center gap-3 p-4 rounded-lg border shadow-md animate-fadeIn ${
                feedback.type === "success"
                  ? "bg-green-100 border-green-400 text-green-800"
                  : "bg-red-100 border-red-400 text-red-800"
              }`}
            >
              {feedback.type === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <XCircle className="w-5 h-5" />
              )}
              <span className="text-sm">{feedback.message}</span>
            </div>
          )}

          <button
            type="submit"
            className=" bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
