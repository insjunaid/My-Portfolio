import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm <span className="text-yellow-500">[JUNAID SHARIFF]</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        "I'm a Computer Science and AI enthusiast passionate about exploring Machine Learning to build intelligent systems and solve real-world challenges..
      </motion.p>
      <motion.a
        href="/your_cv.pdf"
        download
        className="mt-8 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
        whileHover={{ scale: 1.1 }}
      >
        Download CV
      </motion.a>
    </section>
  );
};

export default Hero;
