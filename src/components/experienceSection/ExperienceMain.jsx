import AllExperiences from "./AllExperiences.jsx";
import ExperienceText from "./ExperienceText.jsx";
import ExperienceTop from "./ExperienceTop.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const ExperienceMain = () => {
  return (
    <section id="experience" className="max-w-[1200px] mx-auto px-4 py-16">
      {/* Section Heading */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>

      {/* Top summary section */}
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>

      {/* Divider */}
      <div className="w-full h-1 mt-6 bg-lightBrown hidden lg:block"></div>

      {/* Timeline */}
      <AllExperiences />
    </section>
  );
};

export default ExperienceMain;
