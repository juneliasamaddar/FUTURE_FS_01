import { motion } from "framer-motion";

const projects = [
  {
    title: "Diet Balancer App",
    description:
      "A full stack health and nutrition management system with authentication, meal tracking, and personalized recommendations.",

    tech: "React • Spring Boot • MySQL",

    frontend:
      "https://github.com/Vijayshree25/fsad-sdp-frontend-diet-balancer",

    backend:
      "https://github.com/juneliasamaddar/fsad-sdp-backend-diet-balancer",
  },

  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing projects, skills, and achievements.",

    tech: "React • Tailwind CSS",

    github:
      "https://github.com/juneliasamaddar/FUTURE_FS_01",

    live:
      "https://future-fs-01-drab-tau.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-zinc-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-pink-400 mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-pink-400 hover:shadow-pink-500/20 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-pink-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {project.description}
              </p>

              <div className="mt-6 text-sm text-pink-300">
                {project.tech}
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">

                {project.frontend && (
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-xl font-semibold transition"
                  >
                    Frontend
                  </a>
                )}

                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-gray-300 px-5 py-2 rounded-xl font-semibold transition"
                  >
                    Backend
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-xl font-semibold transition"
                  >
                    View Project
                  </a>
                )}

                {project.live && (
                    <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-semibold transition"
                    >
                        Live Demo
                    </a>
                )}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;