import ExperienceInfo from "./ExperienceInfo.jsx";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-white font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2" text="Years" />
        <p className="font-bold text-6xl text-white">-</p>
        <ExperienceInfo number="10" text="Websites" />
      </div>
      <p className="text-center">
        Completed multiple academic and personal projects in web development, demonstrating practical skills and problem-solving abilities.
        
      </p>
        
    </div>
  );
};

export default ExperienceTopLeft;