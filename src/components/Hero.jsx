import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center text-white px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-bold leading-tight"
      >
        Hi, I'm <span className="text-pink-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]">Junelia</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-6 text-xl text-gray-300 max-w-2xl"
      >
        Full Stack Developer • Bharatanatyam Dancer • Creative Tech Enthusiast
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl text-lg font-semibold transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-pink-400 hover:bg-pink-400 hover:text-black px-6 py-3 rounded-xl text-lg font-semibold transition"
        >
          Contact Me
        </a>
        <a
        href="/Junelia_Samaddar_Resume.pdf"        
        target="_blank"
        className="bg-white text-black hover:bg-gray-300 px-6 py-3 rounded-xl text-lg font-semibold transition"
        >
            Resume
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;