const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-cyanMediumShadow absolute top-0 right-[20%] -z-10 animate-pulse w-40 h-40 rounded-full"></div>
      <div className="shadow-cyanMediumShadow absolute top-[5%] left-0 -z-10 opacity-50 w-32 h-32 rounded-full"></div>
      <div className="shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse w-40 h-40 rounded-full"></div>
      <div className="shadow-orangeMediumShadow absolute top-[10%] left-0 -z-10 opacity-50 w-28 h-28 rounded-full"></div>
    </div>
  );
};

export default HeroGradient;