import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const SingleExperience = ({ experience }) => {
  return (
    <motion.article
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[260px] sm:w-full border-2 border-orange border-dashed rounded-2xl p-6 bg-[#1a1a1a]"
    >
      <h3 className="font-bold text-cyan text-xl">{experience.job}</h3>
      <p className="text-orange text-sm">{experience.company}</p>
      <p className="text-lightGrey text-sm">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 space-y-2 text-lightGrey text-sm">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.article>
  );
};

export default SingleExperience;
