// SingleProject.jsx
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full items-center gap-8 flex-col 
        ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Project Info */}
      <div className="text-center md:text-left flex flex-col gap-2 md:w-1/2">
        <h2 className="text-2xl md:text-3xl text-orange font-semibold">
          {name}
        </h2>
        <h3 className="text-lg md:text-xl font-thin text-white">
          {year}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg flex gap-2 items-center justify-center md:justify-start 
            text-cyan hover:text-orange transition-all duration-500"
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>

      {/* Project Image */}
      <div className="relative max-h-[220px] w-full md:w-1/2 rounded-xl overflow-hidden 
        hover:scale-105 transform transition-all duration-500 border border-white">
        <div className="w-full h-full bg-cyan opacity-40 absolute top-0 left-0 
          hover:opacity-0 transition-all duration-500 hidden md:block"></div>
        <img src={image} alt="website" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
