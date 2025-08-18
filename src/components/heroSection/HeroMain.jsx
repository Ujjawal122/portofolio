import HeroText from "./HeroText.jsx";
import HeroPic from "./HeroPic.jsx";

const HeroMain = () => {
  return (
    <div className="pt-28 pb-16 px-4">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center gap-10">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;