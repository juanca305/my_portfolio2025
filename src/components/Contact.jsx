import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CheckCircle, XCircle } from "lucide-react";

import { styles } from "../styles";
import { MergedCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const FEEDBACK_STYLES = {
    success: "bg-green-100 border-green-400 text-green-800",
    error: "bg-red-100 border-red-400 text-red-800",
    invalid: "bg-yellow-50 border-yellow-400 text-yellow-800",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Check for empty fields
    if (!form.name || !form.email || !form.message) {
      setFeedback({ type: "error", message: "Please fill in all fields." });
      return;
    }

    // 2. Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setFeedback({
        type: "invalid",
        message:
          "⚠️ Please enter a valid email address (e.g., name@example.com).",
      });
      return;
    }

    // 3. Proceed with sending
    setLoading(true);
    // emailjs
    //   .send(
    //     "service_t5bsh1x",
    //     "template_kd9ktwi",
    //     {
    //       from_name: form.name,
    //       to_name: "Juan Carlos",
    //       from_email: form.email,
    //       to_email: "jc.rdguez64@gmail.com",
    //       message: form.message,
    //     },
    //     "mXD8pEO6WEymBAvUi"
    //   )
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Juan Carlos",
          from_email: form.email,
          to_email: import.meta.env.VITE_CONTACT_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(() => {
        setLoading(false);
        setFeedback({
          type: "success",
          message: "Thank you, I will get back to you as soon as possible.",
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setFeedback({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      });
  };

  useEffect(() => {
    if (!feedback.message) return;

    const timer = setTimeout(() => {
      setFeedback({ type: "", message: "" });
    }, 5000);

    return () => clearTimeout(timer);
  }, [feedback]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden  ">
      {/* Content container with margin/padding */}
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10">
        {/* Contact form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          whileHover={{}} // needed so `whileInView` works properly
          whileInView={{
            y: [0, -6, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-[0.75] bg-black-100/60 p-8 rounded-2xl z-10 relative
             shadow-[inset_0_3px_1px_rgba(255,255,255,0.1),_0_10px_30px_rgba(0,0,0,0.6)] border border-white/10"
        >
          <p className={styles.sectionSubText}>Get in touch from everywhere</p>
          <h3 className={styles.heroHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
              />
            </label>

            <AnimatePresence>
              {feedback.message && (
                <motion.div
                  id="feedback-toast" // keep only if you use the manual fade-out class
                  role="alert"
                  aria-live="polite"
                  key={feedback.message}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`mt-4 flex items-center gap-3 p-4 rounded-lg border shadow-md ${
                    FEEDBACK_STYLES[feedback.type] || ""
                  }`}
                >
                  {feedback.type === "success" && (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  {feedback.type === "error" && <XCircle className="w-5 h-5" />}
                  {feedback.type === "invalid" && (
                    <XCircle className="w-5 h-5 text-yellow-600 animate-pulse" />
                  )}
                  <span className="text-sm font-medium">
                    {feedback.message}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="relative px-8 py-3 rounded-xl font-bold text-white cursor-pointer
               bg-gradient-to-r from-cyan-500 to-blue-600
               shadow-md shadow-primary transition-all duration-300 ease-in-out
               hover:from-blue-600 hover:to-cyan-500
               hover:shadow-xl hover:scale-105
               active:scale-95 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {loading ? "Sending..." : "Send"}
                  {!loading && (
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      🚀
                    </span>
                  )}
                </span>

                {/* Glow overlay */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 blur-xl rounded-xl transition duration-500" />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Earth Canvas */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative z-10"
        >
          <MergedCanvas scene="earth" />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
