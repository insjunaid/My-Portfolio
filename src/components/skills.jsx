import { motion } from "framer-motion";

const skills = ["HTML","CSS","MONGO DB","Python","C Programming", "Machine Learning"];

const Skills = () => {
  return (
    <section className="bg-gray-800 text-white p-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-4 rounded shadow-md text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
