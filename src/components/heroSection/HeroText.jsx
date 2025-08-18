import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg sm:text-xl md:text-2xl uppercase text-lightGrey"
      >
        Full Stack Developer & Data Scientist
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange font-bold uppercase"
      >
        Ujjawal <br className="hidden md:block" />
        Kaushal
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-lg mt-4"
      >
        A Passionate Full Stack Developer and Data Scientist <br className="hidden sm:block" />
        with a drive for continuous learning and innovation.
      </motion.p>
    </div>
  );
};

export default HeroText;
