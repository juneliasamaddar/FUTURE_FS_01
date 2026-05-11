import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFlask,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "Flask", icon: <SiFlask size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-pink-400 mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-pink-400 hover:shadow-pink-500/20 hover:shadow-2xl transition"
            >
              <div className="text-pink-400 mb-4">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;