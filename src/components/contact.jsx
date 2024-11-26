import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white p-8 text-center">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="mt-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Feel free to contact me via email or LinkedIn!
      </motion.p>
      <motion.a
        href="mailto:shariffjunaid2004@gmail.com"
        className="mt-8 inline-block bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
        whileHover={{ scale: 1.1 }}
      >
        Email Me
      </motion.a>
    </section>
  );
};

export default Contact;
