// AllExperiences.jsx
import React from "react";
import SingleExperience from "./SingleExperience.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const experiences = [
  {
    job: "Frontend Intern",
    company: "TechStart Solutions",
    date: "Jan 2024 - Mar 2024",
    responsibilities: [
      "Built responsive UI components using React and TailwindCSS.",
      "Collaborated with senior developers to debug and optimize features.",
      "Learned Git workflow and agile development practices.",
    ],
  },
  {
    job: "Personal Portfolio Project",
    company: "Self-Initiated",
    date: "2024",
    responsibilities: [
      "Designed and developed a personal portfolio using React, Framer Motion, and TailwindCSS.",
      "Integrated smooth animations and responsive layouts.",
      "Deployed project on GitHub Pages for public access.",
    ],
  },
  {
    job: "Web Development Bootcamp",
    company: "CodeAcademy / Online Course",
    date: "2023",
    responsibilities: [
      "Completed 300+ hours of training in HTML, CSS, JavaScript, and React.",
      "Built 5+ mini-projects to practice concepts.",
      "Gained strong foundation in frontend technologies and problem solving.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        const key = `${experience.job}-${experience.company}-${experience.date}`;
        const isLast = index === experiences.length - 1;

        return (
          <React.Fragment key={key}>
            <SingleExperience experience={experience} />
            {!isLast && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
