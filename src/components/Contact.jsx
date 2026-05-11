import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-pink-400 mb-8"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-xl leading-8"
        >
          I’m always excited to collaborate on projects,
          internships, creative ideas, and tech opportunities.
        </motion.p>

        <div className="flex justify-center gap-8 mt-12 text-4xl">

          <a
            href="https://github.com/juneliasamaddar"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/junelia-samaddar-9b7994312/"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:samaddarjunelia@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;