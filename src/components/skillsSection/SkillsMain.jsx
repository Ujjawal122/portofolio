import AllSkills from "./AllSkills.jsx";
import AllSkillsSM from "./AllSkillsSM.jsx";
import SkillsText from "./SkillsText.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        {/* Section Heading */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Large screen view */}
        <div className="hidden lg:block absolute bottom-[50px] left-1/2 -translate-x-1/2">
          <AllSkills />
        </div>

        {/* Mobile + Tablet view */}
        <div className="block lg:hidden mt-12">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
