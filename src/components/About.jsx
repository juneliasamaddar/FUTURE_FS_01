import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-950 text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/Junelia_Photo.jpg"
            alt="profile"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-pink-400">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            I’m a passionate Full Stack Developer and Bharatanatyam dancer
            currently pursuing Computer Science Engineering.
            I love blending creativity with technology to build meaningful
            digital experiences.
          </p>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            My interests include web development, UI/UX design,
            backend systems, AI-powered tools, and cultural storytelling
            through dance and media.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full">
              Spring Boot
            </span>

            <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full">
              Flask
            </span>

            <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full">
              Bharatanatyam
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;