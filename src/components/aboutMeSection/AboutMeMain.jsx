import AboutMeImage from "./AboutMeImage.jsx";
import AboutMeText from "./AboutMeText.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col-reverse md:flex-row gap-12 px-6 md:px-12 max-w-[1200px] mx-auto mt-16 md:mt-24 justify-between items-center"
    >
      {/* Text Section */}
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full md:w-1/2"
      >
        <AboutMeText />
      </motion.div>

      {/* Image Section */}
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
