import ExperienceTopLeft from "./ExperienceTopLeft.jsx";
import ExperienceTopMiddle from "./ExperienceTopMiddle.jsx";
import ExperienceTopRight from "./ExperienceTopRight.jsx";

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;