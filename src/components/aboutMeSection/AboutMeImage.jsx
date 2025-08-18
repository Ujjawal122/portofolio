const AboutMeImage = () => {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[400px] mx-auto">
      {/* Image wrapper */}
      <div className="rounded-[40px] overflow-hidden aspect-[3/5]">
        <img
          src="/images/about-me.jpg"
          alt="About Me Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background shape */}
      <div className="absolute -bottom-6 -left-6 w-[85%] h-[90%] bg-orange 
        rounded-bl-[80px] rounded-tr-[80px] rounded-br-[20px] rounded-tl-[20px] 
        -z-10 hidden sm:block">
      </div>
    </div>
  );
};

export default AboutMeImage;
