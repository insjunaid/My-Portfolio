import { motion } from "framer-motion";

const projects = [
  { title: "Skin Lesions Classification", description: "Developed an advanced Skin Lesion Classification System utilizing the EfficientNet-B4 architecture, enhanced through transfer learning and fine-tuning. The system effectively classifies skin lesions into seven categories, distinguishing between malignant and benign types with high accuracy. Incorporated robust preprocessing techniques and class balancing to handle dataset imbalance. Integrated a Flask-based web app for user-friendly image upload and prediction, providing lesion type, malignancy status, confidence levels, and actionable recommendations for further care." },
  { title: "Iris Flower Classification", description: "Developed an Iris Flower Classification System using machine learning techniques and the classic Iris dataset consisting of 150 samples across three species: Setosa, Versicolor, and Virginica. Leveraged data preprocessing and exploratory data analysis to understand feature distributions and relationships.Utilized a CSV-based dataset for seamless data handling" },
  
];

const Projects = () => {
  return (
    <section className="bg-black text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded shadow-md hover:shadow-lg hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
