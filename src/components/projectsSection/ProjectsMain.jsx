// ProjectsMain.jsx
import ProjectsText from "./ProjectsText.jsx";
import SingleProject from "./SingleProject.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const projects = [
  {
    name: "Data Cleaning in Titanic",
    year: "2024",
    align: "right",
    link: "https://github.com/Ujjawal122/data_cleaning_in_titanic",
    image: "/images/data_cleaning.jpg",
  },
  {
    name: "Galaxy Word",
    year: "2024",
    align: "left",
    link: "https://github.com/Ujjawal122/galaxy_word",
    image: "/images/galxay.png",
  },
  {
    name: "Guessing Number",
    year: "2024",
    align: "right",
    link: "https://github.com/Ujjawal122/Guessing_Number",
    image: "/images/guessing.jpg",
  },
  {
    name: "BMI Generator",
    year: "2024",
    align: "left",
    link: "https://github.com/Ujjawal122/BMI-Genertor",
    image: "/images/bmi.jpg", // fixed missing leading slash
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      {/* Projects Section Heading */}
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-20 mt-12">
        {projects.map((project, index) => (
          <SingleProject key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
