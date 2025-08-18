import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-cyan font-bold mb-6 md:mb-10">
        About Me
      </h2>

      <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
        I am a passionate Full Stack Developer and Data Scientist, skilled in
        building end-to-end web applications and extracting meaningful insights
        from data. My expertise spans modern front-end frameworks like React,
        robust back-end systems with Node.js, and advanced data analytics using
        Python, machine learning, and AI. I enjoy solving complex problems by
        blending software engineering and data science to deliver impactful,
        scalable solutions.
      </p>

      <button className="border border-orange rounded-full py-2 px-6 text-lg flex gap-2 items-center mt-8 md:mt-10 hover:bg-orange transition-all duration-500 cursor-pointer">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
